import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList, IonItem, IonLabel, IonButton, IonButtons, IonActionSheet } from "@ionic/react";
import { useState } from "react";
const Home = () => {
    const [showActionSheet, setShowActionSheet] = useState(false);
    return(
       <IonPage>
           <IonHeader>
               <IonToolbar mode="ios">
                   <IonTitle>
                       Home
                   </IonTitle>
               </IonToolbar>
           </IonHeader>
           <IonContent fullscreen>
               <IonList>
                   <IonItem button onClick={() => {
                       setShowActionSheet(true)
                   }}>
                       <IonLabel>
                           task 1
                       </IonLabel>
                   </IonItem>
                   <IonItem>
                       <IonLabel>
                           task 2
                       </IonLabel>
                   </IonItem>
                   <IonItem>
                       <IonLabel>
                           task 3
                       </IonLabel>
                   </IonItem>
                   <IonItem>
                       <IonLabel>
                           task 4
                       </IonLabel>
                   </IonItem>
               </IonList>
           </IonContent>
           <IonActionSheet
           mode="ios"
            isOpen={showActionSheet}
            onDidDismiss={() => setShowActionSheet(false)}
            buttons={[{
                text : "Edit",
                handler : () => {console.log("edit")}
            },{
                text : "Open",
                handler : () => {console.log("open")}
            },{
                text : "Delete",
                role: 'destructive',
                handler : () => {console.log("Delete")}
            },{
                text : "cancel",
                role: 'cancel',
                handler : () => {console.log("cancel")}
            }]}
           ></IonActionSheet>
       </IonPage>
    )
}

export default Home;