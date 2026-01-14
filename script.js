function showTime() {
  document.getElementById('currentTime').innerHTML = new Date().toLocaleString('fr-FR', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
  });
}

showTime();
setInterval(showTime, 1000);

document.getElementById('sendWhatsapp').addEventListener('click', function () {
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const gender = document.getElementById('gender').value;
  const partnerGender = document.getElementById('partnerGender').value;
  const partnerAge = document.getElementById('partnerAge').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !age || !gender || !partnerGender || !partnerAge) {
    alert('Veuillez remplir tous les champs obligatoires.');
    return;
  }

  let whatsappMessage = `Agence Matrimoniale - Nouvelle demande:%0A`;
  whatsappMessage += `Nom: ${name}%0A`;
  whatsappMessage += `Âge: ${age}%0A`;
  whatsappMessage += `Sexe: ${gender}%0A`;
  whatsappMessage += `Préférence sexe du partenaire: ${partnerGender}%0A`;
  whatsappMessage += `Préférence âge du partenaire: ${partnerAge}%0A`;
  if (message) {
    whatsappMessage += `Message: ${message}%0A`;
  }

  // Remplacez par votre numéro WhatsApp au format international sans "+"
  const whatsappNumber = '+237652023146';

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  window.open(whatsappURL, '_blank');
});
