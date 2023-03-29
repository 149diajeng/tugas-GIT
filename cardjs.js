$(document).ready(function () {
      $('#autoWidth').lightSlider({
        autoWidth: true,
        autoWidth2: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth').removeClass('cS-hidden');
        }
      });
    });

$(document).ready(function () {
      $('#autoWidth3').lightSlider({
        autoWidth: true,
        autoWidth2: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth3').removeClass('cS-hidden');
        }
      });
    });

$(document).ready(function () {
      $('#autoWidth2').lightSlider({
        autoWidth: true,
        autoWidth2: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth2').removeClass('cS-hidden');
        }
      });
    });


$(document).ready(function () {
      $('#autoWidth4').lightSlider({
        autoWidth: true,
        autoWidth2: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth4').removeClass('cS-hidden');
        }
      });
    });

$(document).ready(function () {
      $('#autoWidth5').lightSlider({
        autoWidth: true,
        autoWidth2: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth5').removeClass('cS-hidden');
        }
      });
    });

$(document).ready(function () {
      $('#autoWidth6, #autoWidth7').lightSlider({
        autoWidth: true,
        autoWidth2: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth6, #autoWidth7').removeClass('cS-hidden');
        }
      });
    });
    
  


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const accordionContent = btn.nextElementSibling;

    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });
});
const youtubeId = 'scary1';

document.querySelectorAll('.youtube-thumbnail').forEach((el) => {
    el.addEventListener('shown.bs.tooltip', () => {
        // insert the YouTube video using the iframe API
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/watch?v=7DNXUvHm-S8${youtubeId}`);
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('width', '560');
        iframe.setAttribute('height', '315');
        const content = document.createElement('div');
        content.appendChild(iframe);
        const tooltip = bootstrap.Tooltip.getInstance(el);
        tooltip.setContent(content);
    });
});

