// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (3 images)
const slides = [
	{ src: 'images/image01.jpg', 
	 alt: 'seagull on the beach',
	caption: 'I don’t know why Spring is my favorite season'
	},
	{ src: 'images/image02.jpg', 
	 alt: 'buds on a tree',
	 caption: 'Maybe because it’s always been that way'
	},
	{ src: 'images/image03.jpg', 
	 alt: 'swan couple swimming',
	 caption: 'I know spring’s coming before the ice melts,'
	},
	{ src: 'images/image04.jpg',
	 alt: 'paw prints in snow',
	 caption: 'hibernators leave their nests,'
	},
	{ src: 'images/image05.jpg',
	 alt: 'hill overlooking water',
	 caption: 'or the birds fly home'
	},
	{ src: 'images/image06.jpg',
	 alt: 'geese flying overhead',
	 caption: 'Spring always comes'
	},
	{ src: 'images/image07.jpg',
	 alt: 'caterpillar in a leaf',
	 caption: 'just like time passes'
	},
	{ src: 'images/image08.jpg',
	 alt: 'robin on a tree branch',
	 caption: 'and people die'
	},
	{ src: 'images/image09.jpg',
	 alt: 'plants growing',
	 caption: 'Sometimes I wish time would stop'
	},
	{ src: 'images/image10.jpg',
	 alt: 'double rainbow',
	 caption: 'But then Spring wouldnt come'
	}
];

let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
	const i = new Image();
	i.src = src;
});

// Helper to show slide
function showSlide(index) {
	const slide = slides[index];
	mainImage.src = slide.src;
	mainImage.alt = slide.alt;
	caption.textContent = slide.caption;
}

// Advance on click
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);