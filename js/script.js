// BOOLZAP ----------------------------------------------------------

// Milestone 1 -----------------------------------------
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
// e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
// visualizzare nome e immagine di ogni contatto
// Copiate nel vostro data l'array di oggetti contacts, che trovate nella cartella drive,
// oppure qui in allegato.
// Milestone 2 -----------------------------------------
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for,
// visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3 -----------------------------------------
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa
// e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio,
// l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

var app = new Vue({
  el: '#app',
  data: {
// SEZIONE ACCOUNT UTENTE --------------------------
    user: {
        name: 'Mick',
        avatar: '_io'
    },
// SEZIONE CONTATTI --------------------------
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            },
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
            }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
      },
    ],
    indexContact: 0,
    contactSearchInput: '',
    newMess: '',
// SEZIONE CONTATTI --------------------------
  },
  methods: { // funzioni
    // funzione per selezionare l'index del contatto
      setIndexContact(index) {
          console.log(index);

          this.indexContact = index;
      },
    // funzione per inviare un nuovo messaggio e visualizzarlo nella chat
      addMess() {
        if (this.newMess.trim() !== '') {
          this.contacts[this.indexContact].messages.push( {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message: this.newMess,
            status: 'send'
          });
          this.newMess = ''; // per fare il clear del messaggio dopo l'invio
        }
    // funzione per ricevere dopo 1 sec una risposta dopo l'input
      setTimeout(() => {
        this.contacts[this.indexContact].messages.push( {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        message: 'Ok',
        status: 'received'
        });
      }, 1000 )
    },
    // funzione per ricerca utente nella barra "search bar"
    
  }
});
Vue.config.devtools = true;
