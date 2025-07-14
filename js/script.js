// ========= GOOGLE MAPS LOADER =========
document.addEventListener('DOMContentLoaded', () => {
    const loadMapBtn = document.getElementById('load-map-btn');
    const mapPlaceholder = document.getElementById('map-placeholder');

    if (loadMapBtn && mapPlaceholder) {
        loadMapBtn.addEventListener('click', () => {
            // WICHTIG: Ersetzen Sie diese URL durch Ihre eigene Google Maps Einbettungs-URL
            const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.4698388265468!2d10.210749499453149!3d50.329251249994435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3052509bb5669%3A0x696dc4bcb65913fb!2sApartment%2067!5e0!3m2!1sde!2sde!4v1752485157191!5m2!1sde!2sde';

            const iframe = document.createElement('iframe');
            iframe.src = mapUrl;
            iframe.width = "100%";
            iframe.height = "100%";
            iframe.style.border = 0;
            iframe.allowfullscreen = "";
            iframe.loading = "lazy";
            iframe.referrerpolicy = "no-referrer-when-downgrade";

            mapPlaceholder.innerHTML = ''; // Leert den Platzhalter
            mapPlaceholder.appendChild(iframe); // Fügt die Karte ein
        });
    }
});

