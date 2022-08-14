const slide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('navbar');
    const navlinks = document.querySelectorAll('.links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('navbaract')
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navlinkfade 4s ease backwards ${index / 10}s`;
                //       }
                //     });
                // });
            }
        });
    })
}
  slide()