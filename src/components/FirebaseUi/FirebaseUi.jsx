import styles from "./FirebaseUi.module.css"
import  { FirebaseContext } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore'; // Add doc here
import { useState } from "react";

const FirebaseUi = () => {
    
    const [fetchedData, setFetchedData] = useState([]);


    const handleQuery = async (firebase) => {
        console.log("Clicked Query button")
        // firebase.dummy();

        if ( firebase.firestore === null) {
            console.log("Firestore não foi inicializada corretamente. Não é possível fazer consultas.")
            return null;
        }

        try {
            console.log("Firestore: ", firebase.firestore);
            const querySnapshot = await getDocs(collection(firebase.firestore, "acervo"));
            const tmp = []
            querySnapshot.forEach(doc => {
                const data = doc.data();
                
                const myObj = {
                    url: data.url,
                    year: data.year,
                    description: data.description
                }
                tmp.push(myObj)
            });

            console.log(tmp)
            setFetchedData(tmp);

        } catch (error) {
            console.error("Firestore query failed:", error.code, error.message, error);
        }
    }

    return (
        <FirebaseContext.Consumer>
            {firebase => (
                <div className={styles.mainContainer}>
                    <button className={styles.queryBtn} onClick={() => handleQuery(firebase)}>Query</button>
                    {fetchedData.length > 0 ? fetchedData.map( (data) => (
                        <div className={styles.dataDiv}> 
                            <p><b>Ano: </b>{data.year}</p>
                            <p><b>Descrição: </b>{data.description}</p>
                            <img src={data.url} className={styles.acervoImg}/> 
                        </div>
                        ) )  : <p>App ainda não consultou dados no firebase.</p> }
                </div>
            )}
        </FirebaseContext.Consumer>
    );
};

export default FirebaseUi;