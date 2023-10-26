
PASOS PARA INICIAR APP IONIC/ANGULAR 

1-https://nodejs.org/es                      / SE DESCARGA NODE.JS (se puede verificar con node --version)
2-npm install -g @angular/cli		     / SE INSTALA ANGULAR EN CONSOLA CMD
3-npm install -g @ionic/cli@6		     / SE INSTALA IONIC EN CONSOLA CMD
4-ionic start nombre_app blank		     / SE CREA EL PROYECTO EN CONSOLA CMD
5-npm install -g json-server		     / SE INSTALA JASON SERVER EN CONSOLA CMD
6-npm install @capacitor/toast		     / SE INSTALA CAPACITOR/TOAST EN CONSOLA CMD

FINALMENTE EN 2 CONSOLAS CMD DISTINTAS:
7-json-server --watch nombre_json.json --host 0.0.0.0 --port 3300         /SE INICIA EL JSON EN CONSOLA CMD EN LA CARPETA nombre_app/src/app/data
8-ionic serve                                                             /SE INICIA NUESTRO PROYECTO EN CONSOLA CMD, PARA PODER USARLO
