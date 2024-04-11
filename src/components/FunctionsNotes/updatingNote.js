

function updateNote(data, note) {
  // Parcourir les notes
  for (let i = 0; i < data.length; i++) {
    // Vérifier si l'ID de la note est égal à l'ID de la note à mettre à jour
     if(data[i].id === note.id) {
      // Mettre à jour la note
        data[i] = {
          ...data[i],  
          ...note      
        };
        // Retourner les données
        return data; 
    }
  }
}


export default updateNote;