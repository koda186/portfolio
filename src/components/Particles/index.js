import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 1800,
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 0.1,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'path/to/first/image.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.1008530152163807,
            random: false,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2.5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: true
            }
          },
          line_linked: {
            enable: true,
            distance: 135,
            color: '#ffffff',
            opacity: 0.1687847739990702,
            width: 1.213648243462091
            //opacity: 0.03,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            //direction: "right",
            //speed: 0.05,
            attract: {
              enable: false,
              rotateX: 3000,
              rotateY: 3000
            }
          },
          array: []
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
              //mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: "push",
              //mode: "push",
            },
            resize: true
          },
          modes: {
            grab:{
              distance: 100,
              line_linked:{
                opacity: 1
              }
            },
            bubble:{
              distance: 200,
              size: 80,
              duration: 0.4
            },
            repulse:{
              distance: 200,
              duration: 0.4
            },
            push:{
              particles_nb: 4
            },
            remove:{
              particles_nb: 2
            }
          },
          mouse:{}
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
