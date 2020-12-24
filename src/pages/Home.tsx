import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useLocalStorage } from '../hook';
import './Home.css';
import {closeOutline as deleteIcon , checkmarkDoneOutline as doneIcon, logoGithub as gitLogo} from 'ionicons/icons';


var MainColor = "tertiary";
var CompletedColor = "success";
var DeleteColor = "danger";
var TextColor = "medium";

const Home: React.FC = () => {
const [task1,setTask1] = useLocalStorage('task1',"");
const [color1,setColor1] = useLocalStorage('color1',MainColor);
const [task2,setTask2] = useLocalStorage('task2',"");
const [color2,setColor2] = useLocalStorage('color2',MainColor);
const [task3,setTask3] = useLocalStorage('task3',"");
const [color3,setColor3] = useLocalStorage('color3',MainColor);
const [task4,setTask4] = useLocalStorage('task4',"");
const [color4,setColor4] = useLocalStorage('color4',MainColor);
const [task5,setTask5] = useLocalStorage('task5',"");
const [color5,setColor5] = useLocalStorage('color5',MainColor);
const [task6,setTask6] = useLocalStorage('task6',"");
const [color6,setColor6] = useLocalStorage('color6',MainColor);
const [task7,setTask7] = useLocalStorage('task7',"");
const [color7,setColor7] = useLocalStorage('color7',MainColor);
const [task8,setTask8] = useLocalStorage('task8',"");
const [color8,setColor8] = useLocalStorage('color8',MainColor);
const [task9,setTask9] = useLocalStorage('task9',"");
const [color9,setColor9] = useLocalStorage('color9',MainColor);
const [task10,setTask10] = useLocalStorage('task10',"");
const [color10,setColor10] = useLocalStorage('color10',MainColor);



const changeColor1 = () => {
  if (color1 === MainColor){ setColor1(CompletedColor)}
  else setColor1(MainColor);
}
const changeColor2 = () => {
  if (color2 === MainColor){ setColor2(CompletedColor)}
  else setColor2(MainColor);
}
const changeColor3 = () => {
  if (color3 === MainColor){ setColor3(CompletedColor)}
  else setColor3(MainColor);
}
const changeColor4 = () => {
  if (color4 === MainColor){ setColor4(CompletedColor)}
  else setColor4(MainColor);
}
const changeColor5 = () => {
  if (color5 === MainColor){ setColor5(CompletedColor)}
  else setColor5(MainColor);
}
const changeColor6 = () => {
  if (color6 === MainColor){ setColor6(CompletedColor)}
  else setColor6(MainColor);
}
const changeColor7 = () => {
  if (color7 === MainColor){ setColor7(CompletedColor)}
  else setColor7(MainColor);
}
const changeColor8 = () => {
  if (color8 === MainColor){ setColor8(CompletedColor)}
  else setColor8(MainColor);
}
const changeColor9 = () => {
  if (color9 === MainColor){ setColor9(CompletedColor)}
  else setColor9(MainColor);
}
const changeColor10 = () => {
  if (color10 === MainColor){ setColor10(CompletedColor)}
  else setColor10(MainColor);
}





const cleanTask1 = () => {
setTask1("");
setColor1(MainColor);
};
const cleanTask2 = () => {
  setTask2("");
  setColor2(MainColor);
  };
const cleanTask3 = () => {
    setTask3("");
    setColor3(MainColor);
    };
const cleanTask4 = () => {
  setTask4("");
  setColor4(MainColor);
      };  
const cleanTask5 = () => {
  setTask5("");
  setColor5(MainColor);
        };  
             
const cleanTask6 = () => {
    setTask6("");
    setColor6(MainColor);
            }; 
const cleanTask7 = () => {
      setTask7("");
      setColor7(MainColor);
              }; 
const cleanTask8 = () => {
    setTask8("");
    setColor8(MainColor);
                };  
const cleanTask9 = () => {
      setTask9("");
      setColor9(MainColor);
                  };  
const cleanTask10 = () => {
      setTask10("");
      setColor10(MainColor);
                    };    


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" color="medium" className="ion-text-center"> List </IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonList>
          <IonItem>
           
            <IonLabel color = {TextColor}>
              1:
            </IonLabel>
          <IonInput type="text" value={task1} color={TextColor} onIonChange={(event) => setTask1(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color1} onClick = {changeColor1}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask1}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>
          <IonItem>
           
            <IonLabel color = {TextColor}>
              2:
            </IonLabel>
          <IonInput type="text" value={task2} color={TextColor} onIonChange={(event) => setTask2(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color2} onClick = {changeColor2}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask2}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>
          <IonItem>
           
            <IonLabel color = {TextColor}>
              3:
            </IonLabel>
          <IonInput type="text" value={task3} color={TextColor} onIonChange={(event) => setTask3(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color3} onClick = {changeColor3}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask3}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>

          <IonItem>
           
            <IonLabel color = {TextColor}>
              4:
            </IonLabel>
          <IonInput type="text" value={task4} color={TextColor} onIonChange={(event) => setTask4(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color4} onClick = {changeColor4}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask4}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>

          <IonItem>
           
            <IonLabel color = {TextColor}>
              5:
            </IonLabel>
          <IonInput type="text" value={task5} color={TextColor} onIonChange={(event) => setTask5(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color5} onClick = {changeColor5}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask5}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>
          <IonItem>
           
            <IonLabel color = {TextColor}>
              6:
            </IonLabel>
          <IonInput type="text" value={task6} color={TextColor} onIonChange={(event) => setTask6(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color6} onClick = {changeColor6}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask6}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>

          <IonItem>
           
            <IonLabel color = {TextColor}>
              7:
            </IonLabel>
          <IonInput type="text" value={task7} color={TextColor} onIonChange={(event) => setTask7(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color7} onClick = {changeColor7}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask7}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>
          <IonItem>
           
            <IonLabel color = {TextColor}>
              8:
            </IonLabel>
          <IonInput type="text" value={task8} color={TextColor} onIonChange={(event) => setTask8(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color8} onClick = {changeColor8}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask8}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>
          <IonItem>
           
            <IonLabel color = {TextColor}>
              9:
            </IonLabel>
          <IonInput type="text" value={task9} color={TextColor} onIonChange={(event) => setTask9(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color9} onClick = {changeColor9}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask9}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>
          <IonItem>
           
            <IonLabel color = {TextColor}>
              10:
            </IonLabel>
          <IonInput type="text" value={task10} color={TextColor} onIonChange={(event) => setTask10(event.detail.value)} />
          <IonButton fill ="clear" slot ="end" color= {color10} onClick = {changeColor10}>
              <IonIcon icon={doneIcon} />
           </IonButton>
            <IonButton fill="clear" color={DeleteColor} slot ="end" onClick={cleanTask10}>
              <IonIcon icon= {deleteIcon} />
              </IonButton>
          </IonItem>






         
          
          
            

          
        </IonList>
        

    <IonFooter>
      <IonToolbar>
        <IonTitle size="small" color="medium"> Created by <a href = "https://github.com/Saroramath" >
          <IonIcon color="medium" icon={gitLogo}></IonIcon>
          </a></IonTitle>
      </IonToolbar>
    </IonFooter>

      </IonContent>
    </IonPage>
  );
};

export default Home;
