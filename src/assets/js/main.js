import Alpine from "alpinejs";
import Swiper from "swiper/bundle";
import collapse from "@alpinejs/collapse";
import kissImage from "../img/icon-kiss.png";

Alpine.plugin(collapse);

Alpine.store("desktopMenu", {
	isOpen: false,

	toggle() {
		this.isOpen = !this.isOpen;
	},

	close() {
		this.isOpen = false;
	},
});

Alpine.store("mobileMenu", {
	isOpen: false,

	toggle() {
		this.isOpen = !this.isOpen;
	},

	close() {
		this.isOpen = false;
	},
});

const swiper = new Swiper(".swiper", {
	loop: true,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="${className}">
				<span class="inline-block bullet-active">
					<img
						src="${kissImage}"
						class="h-8 w-[2.1rem]"
						alt=""
					/>
				</span>
				<span class="bullet-inside"></span>
			</span>
		`;
		},
	},
});

window.Alpine = Alpine;

Alpine.start();
