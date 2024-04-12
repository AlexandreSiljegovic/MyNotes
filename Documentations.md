# Sommaire

1. [saveNote](#saveNote)
2. [updatingNote](#updatingNote)
3. [deleteNote](#deleteNote)
4. [RenderNote](#RenderNote)
5. [SearchBar](#SearchBar)
6. [NoteEditForm](#NoteEditForm)
7. [noteForm](#noteForm)

## saveNote
Une fonction asynchrone qui est utilisée pour sauvegarder une note dans le stockage local de l'appareil à l'aide de `AsyncStorage` dans une application React Native.

## updatingNote
Une fonction qui est utilisée pour mettre à jour une note spécifique dans un tableau de notes.

## deleteNote
Une fonction asynchrone qui est utilisée pour supprimer une note spécifique dans une application React Native.

## RenderNote
Fonction de rendu pour un composant de note.

## SearchBar
Composant de barre de recherche.

## NoteEditForm
Composant pour l'édition d'une note.

## noteForm
Composant qui gère la création de note.

## Home 
Page d'accueil de l'application 




_1 - saveNote :  une fonction asynchrone qui est utilisée pour sauvegarder une note dans le stockage local de l'appareil à l'aide de `AsyncStorage` dans une application React Native.

Au début, la fonction [`SaveNote`] vérifie si les champs `note`, `title` et `importance` de l'objet `note` sont vides. Si l'un de ces champs est vide, une alerte est affichée à l'utilisateur indiquant que ces champs sont obligatoires.

Si tous les champs sont remplis, la fonction tente de récupérer toutes les notes existantes du stockage local. Si des notes existent, elles sont converties en un tableau d'objets JavaScript à partir du format JSON.

Ensuite, la fonction vérifie si la note actuelle a un `id`. Si c'est le cas, cela signifie que la note existe déjà et doit être mise à jour. La fonction `updateNote` est appelée avec le tableau de notes existantes et la note actuelle pour effectuer cette mise à jour.

Si la note n'a pas d'`id`, cela signifie qu'il s'agit d'une nouvelle note. Un nouvel `id` est généré pour la note (qui est soit le plus grand `id` existant plus un, soit 1 si aucune note n'existe) et la note est ajoutée au tableau de notes.

Enfin, le tableau de notes est converti en format JSON et sauvegardé dans le stockage local. L'utilisateur est ensuite renvoyé à l'écran précédent avec `navigation.goBack()`.

Si une erreur se produit à un moment donné pendant ce processus, l'erreur est enregistrée dans la console et une alerte est affichée à l'utilisateur indiquant qu'une erreur s'est produite lors de la tentative de sauvegarde de la note.


_2 updatingNote : une fonction  qui est utilisée pour mettre à jour une note spécifique dans un tableau de notes. Cette fonction prend deux arguments : `data` et [`note`].

`data` est un tableau de notes existantes. Chaque note est un objet qui contient au moins une propriété `id`.

[`note`] est l'objet de la note à mettre à jour. Il doit également contenir une propriété `id`.

La fonction [`updateNote`] parcourt le tableau `data` en utilisant une boucle `for`. Pour chaque note dans le tableau, elle vérifie si l'`id` de la note est égal à l'`id` de la note à mettre à jour.

Si elle trouve une correspondance, elle met à jour la note dans le tableau en utilisant l'opérateur de décomposition (`...`). Cet opérateur crée une nouvelle copie de l'objet note, en conservant toutes les propriétés existantes de la note originale (`...data[i]`) et en écrasant les propriétés avec celles de la note à mettre à jour ([`...note`]).

Une fois la note mise à jour, la fonction retourne immédiatement le tableau `data` mis à jour. Si aucun `id` correspondant n'est trouvé dans le tableau `data`, la fonction se termine sans retourner de valeur.

Enfin, la fonction [`updateNote`] est exportée pour être utilisée dans d'autres parties de l'application.


_3 deleteNote :  une fonction asynchrone qui est utilisée pour supprimer une note spécifique dans une application React Native. Cette fonction utilise `AsyncStorage` pour stocker et récupérer les notes, et `Alert` pour afficher des messages d'erreur à l'utilisateur.

La fonction [`deleteNote`] prend deux arguments : `note` et `navigation`. `note` est l'objet de la note à supprimer, qui doit contenir une propriété `id`. `navigation` est utilisé pour naviguer entre les différents écrans de l'application.

Au début de la fonction, il y a une vérification pour s'assurer que l'`id` de la note est défini. Si l'`id` est `undefined`, une alerte est affichée à l'utilisateur indiquant que l'`id` est indéfini et que la note ne peut pas être supprimée.

Si l'`id` de la note est défini, la fonction tente de supprimer la note. Elle commence par récupérer toutes les notes existantes du stockage local. Si des notes existent, elles sont converties en un tableau d'objets JavaScript à partir du format JSON.

Ensuite, la fonction parcourt le tableau de notes en utilisant une boucle `for`. Pour chaque note dans le tableau, elle vérifie si l'`id` de la note est égal à l'`id` de la note à supprimer. Si elle trouve une correspondance, elle supprime la note du tableau en utilisant la méthode `splice`.

Après avoir supprimé la note, le tableau de notes est converti en format JSON et sauvegardé dans le stockage local. L'utilisateur est ensuite renvoyé à l'écran précédent avec `navigation.goBack()`.

Si une erreur se produit à un moment donné pendant ce processus, l'erreur est capturée et une alerte est affichée à l'utilisateur indiquant qu'une erreur s'est produite lors de la tentative de suppression de la note.


_4 RenderNote : fonction de render pour un composant de note. 

La fonction [`renderNote`]prend un objet en argument qui contient deux propriétés : `item` et `navigation`. `item` est l'objet de la note à afficher, qui contient des informations sur la note, comme son titre, son importance et sa date. `navigation` est utilisé pour naviguer entre les différents écrans de l'application.

Au début de la fonction, les polices de caractères sont chargées à l'aide de la fonction `useFonts` de `@expo-google-fonts/montserrat`. Si les polices ne sont pas encore chargées, la fonction retourne `null` et ne rend rien.

Ensuite, deux fonctions sont définies : [`formatDate`] et [`getBackgroundColor`]. [`formatDate`]prend une chaîne de caractères représentant une date et retourne une nouvelle chaîne formatée. [`getBackgroundColor`]retourne une couleur de fond différente en fonction de l'importance de la note.

La fonction [`renderNote`] retourne un composant `TouchableOpacity` qui contient les informations de la note. Lorsqu'on appuie sur ce composant, l'application navigue vers l'écran "NotesEdit" et passe l'objet de la note et un booléen [`search`] comme paramètres.


_5 SearchBar : Composant de barre de recherche. 

La fonction [`SearchBar`] prend deux props : `data` et `onChange`. `data` est un tableau d'objets représentant les notes, et `onChange` est une fonction qui est appelée lorsque les données de recherche changent.

Au début de la fonction, un état local [`masterData`] est défini à l'aide du Hook `useState` de React. [`masterData`] est initialisé avec `data`.

Ensuite, une fonction [`search`] est définie. Cette fonction prend une chaîne de caractères `text` en argument et filtre les données en fonction de cette chaîne. Si `text` est non vide, la fonction crée un nouveau tableau [`newData`] qui contient seulement les éléments de `data` dont le titre contient `text`. Le titre de chaque note et `text` sont convertis en majuscules pour rendre la recherche insensible à la casse. Si `text` est vide, [`masterData`] est utilisé à la place.

La fonction [`search`] appelle ensuite `onChange` avec le nouveau tableau de notes. Cela permet de mettre à jour les données affichées en dehors du composant [`SearchBar`].

Enfin, la fonction [`SearchBar`] retourne un composant `View` qui contient un composant `TextInput`. `TextInput` est utilisé pour saisir le texte de recherche. Lorsque le texte change, la fonction [`search`] est appelée avec le nouveau texte. 

_6 NoteEditForm :  Le composant [`NotesEdit`] est une fonction qui prend en paramètre `route` et `navigation` de React Navigation. Il définit plusieurs états avec `useState` pour gérer la note en cours d'édition, la date, l'importance de la note, et un indicateur pour savoir si la note est en cours de sauvegarde.

Il définit également une fonction [`SaveNote`], existante aussi dans un composant à part mais rédéfinit entièrement ici exclusivement pour l'alert, afin de sauvegarder la note. Cette fonction vérifie d'abord si tous les champs nécessaires sont remplis. Si c'est le cas, elle récupère les notes existantes du stockage asynchrone, ajoute ou met à jour la note en cours, puis sauvegarde les notes dans le stockage asynchrone.

Il y a aussi une fonction [`hasUnsavedChanges`] pour vérifier si des modifications non enregistrées ont été apportées à la note.

Dans le rendu du composant, il y a plusieurs champs de saisie pour le titre et la description de la note, un sélecteur pour l'importance de la note, et deux boutons pour supprimer et sauvegarder la note.

Enfin, il utilise `useEffect` pour initialiser la note lors de l'édition et pour ajouter un écouteur à la navigation qui avertit l'utilisateur s'il y a des modifications non enregistrées lorsqu'il quitte l'écran.

_7 noteForm : Composant qui gère la création de note.  
La fonction [`importanceColor`] attribue une couleur en fonction de l'importance de la note. Les styles pour le sélecteur de valeurs sont définis dans [`pickerSelectStyles`].

L'état de la note est géré avec `useState`. L'état initial de la note est un objet avec des propriétés pour l'id, le titre, le contenu de la note, la date, l'id de notification et l'importance. L'importance de la note est également gérée avec son propre état.

`useEffect` est utilisé pour mettre à jour l'état de la note lorsque le composant est monté. Si une note est passée via les paramètres de la route, l'état de la note est mis à jour avec cette note.

La fonction [`handleImportantChange`] est utilisée pour gérer le changement de l'importance de la note. Elle met à jour l'état de la note avec la nouvelle importance.

Dans le rendu du composant, il y a deux champs de texte pour le titre et le contenu de la note. Il y a aussi un sélecteur pour l'importance de la note. Lorsqu'une valeur est sélectionnée, l'état de l'importance est mis à jour et la fonction [`handleImportantChange`] est appelée pour mettre à jour l'état de la note.

Enfin, il y a un bouton pour sauvegarder la note. Lorsqu'il est pressé, la fonction `Save` est appelée avec la note et l'objet de navigation comme arguments.

_8 Home : Ce code représente la page d'accueil de MyNotes



Dans le corps du composant [`Home`], plusieurs états sont définis avec `useState`. [`data`] est utilisé pour stocker les notes, [`loading`] pour indiquer si les données sont en cours de chargement, et [`isDarkMode`] pour indiquer si le mode sombre est activé.

La fonction `useFocusEffect` est utilisée pour charger les notes à partir du stockage local chaque fois que l'écran est mis au premier plan. Si les notes ne sont pas trouvées, un tableau vide est utilisé par défaut. Si une erreur se produit lors du chargement des notes, un message d'erreur est affiché.

Ensuite, les polices de caractères sont chargées avec `useFonts`. Si les polices ne sont pas encore chargées, le composant renvoie `null`, ce qui signifie que rien n'est rendu.

La fonction [`toggleDarkMode`] est utilisée pour basculer entre le mode sombre et le mode clair. Les styles du conteneur et du texte sont définis en fonction du mode actuel.

Si les données sont en cours de chargement, un indicateur de chargement est affiché. Sinon, l'interface utilisateur de l'application est rendue. Cela comprend un en-tête avec un bouton pour basculer le mode sombre, une barre de recherche, et une liste de notes. Si aucune note n'est disponible, un message est affiché à la place. Un bouton est également fourni pour naviguer vers l'écran de prise de notes.