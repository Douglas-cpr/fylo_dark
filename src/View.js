import { Perks, Testimonials } from './Data.js';

const View = {

    init() {
        this.getPerk();
        this.getTestimonial();
    },

    getPerk() {
        Perks.forEach(p => {
            this.addPerk(p);
        });
    },

    addPerk(p) {
        const container = document.querySelector('.perks');

        container.innerHTML += `
        <div class="perk">
            <img src="${p.img.url}" alt="${p.img.alt}">
            <h3>${p.title}</h3>
            <p>${p.text}</p>
        </div>
        `
    },

    getTestimonial() {
        Testimonials.forEach(t => {
            this.addTestimonial(t);
        }) 
    },

    addTestimonial(t) {
        const container = document.querySelector('.testimonials');

        container.innerHTML += `
        <div class="testimonial">
            <p>${t.testimonial}</p>
            <div class="author">
                <img src="${t.author.img.url}" alt="${t.author.img.alt}">
                <span>${t.author.name}</span>
                <span class="job">${t.author.job}</span>
            </div>
        </div>
        `
    }
}

export { View };