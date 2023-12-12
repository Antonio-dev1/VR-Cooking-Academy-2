// Make sure to include the loader file in your project

ketchupDispensingCounter = 0;
cheeseDispensingCounter = 0;

AFRAME.registerComponent('start-particles-on-click', {
    init: function () {
        this.el.addEventListener('click', () => {
            cheeseDispensingCounter = cheeseDispensingCounter + 1;

            if (cheeseDispensingCounter == 1) {
                console.log("Particles are being clicked! Cheese");

                var cheeseDispenser = document.querySelector('#cheeseDispenser');

                var redLever = document.querySelector('#redlever');


                var redLever2 = document.querySelector('#redlever2');
                // Create and enable the particle system
                // setTimeout(() => {
                //     cheeseDispenser.setAttribute('particle-system', {
                //         preset: 'default',
                //         color: '#FFD700',
                //         velocityValue: '0 -1 0',
                //         velocitySpread: '0.5 0.5 0.5',
                //         texture: 'cheese-transp-backgrnd-removebg-preview.png',
                //         size: 0.4,
                //         duration: 5,
                //         sizeSpread: 1,
                //         accelerationSpread: '0.5 10 0.5',
                //         maxAge: 0.6,
                //         accelerationValue: '0 -5 0',
                //         enabled: true,
                //         particleCount: 50
                //     });
                // }, 1000);

                cheeseDispenser.setAttribute('particle-system',
                    'preset: default; color: #FFD700; velocityValue: 0 -1 0; velocitySpread: 0.5 0.5 0.5; texture: cheese-transp-backgrnd-removebg-preview.png; size: 0.4; duration: 5; sizeSpread: 1; accelerationSpread: 0.5 10 0.5; maxAge: 0.6; accelerationValue: 0 -5 0; enabled: true; blending: 1; particleCount: 50'
                );

                // ketchupDispenser.setAttribute('particle-system',
                //     'preset: default; color: #a70000; velocityValue: 0 -1 0; velocitySpread: 0.5 0.5 0.5; texture: ketchup-sauce-removebg-preview.png; size: 0.4; duration: 5; sizeSpread: 1; accelerationSpread: 0.5 10 0.5; maxAge: 0.6; accelerationValue: 0 -5 0; enabled: true; particleCount: 50'
                // );




                // Start the particles after a delay of 1 second
                setTimeout(() => {
                    // Enable the particle system
                    cheeseDispenser.setAttribute('particle-system', 'enabled', true);
                    cheeseDispenser.components['particle-system'].startParticles();
                }, 1000);


                // setTimeout(() => {
                //     // Enable the particle system
                //     cheeseDispenser.setAttribute('particle-system', 'enabled', false);
                //     cheeseDispenser.components['particle-system'].stopParticles();
                // }, 5000);

                // Return to original rotation after 5 seconds
                setTimeout(() => {
                    console.log("triggered after 5.5 seconds lever gets back to normal")
                    // redLever.setAttribute('animation', {
                    //     property: 'rotation',
                    //     to: '20 0 0',
                    //     dur: 2500,
                    //     easing: 'easeOutQuad'
                    // });

                    redLever2.setAttribute('animation',
                        'property: rotation; to: 20 0 0; dur: 2500; easing: linear'
                    );
                }, 5500);

                // Remove the particle system after 7 seconds
                setTimeout(() => {
                    console.log('Deleted the particle system attribute cheese');
                    cheeseDispenser.removeAttribute('particle-system');


                }, 7000);

                setTimeout(() => {
                    const oldDough = document.getElementById('pizza-sauce2');
                    let parent = oldDough.parentElement;
                    let position = oldDough.getAttribute('position');
                    parent.removeChild(oldDough);
                    const newObject = document.createElement('a-entity');
                    // Change this to the type of object you want to replace it with

                    // Model loaded successfully, you can use it in your scene
                    console.log('Model loaded successfully!');
                    newObject.setAttribute('gltf-model', '#cheese-pizza');
                    newObject.setAttribute('scale', '0.04 0.04 0.04');
                    newObject.setAttribute('position', position);
                    newObject.setAttribute('id', 'pizza-cheese');
                    newObject.setAttribute('collision-tracker', '');
                    parent.appendChild(newObject);
                    newObject.setAttribute('body', 'shape:box; mass:2');
                    newObject.setAttribute('grabbable', '');

                }, 5500);





                // const oldDough = document.getElementById('pizza-sauce2');
                // let parent = oldDough.parentElement;
                // // let bigparent = smallparent.parentElement;
                // let position = oldDough.getAttribute('position');
                // parent.removeChild(oldDough);
                // const newObject = document.createElement('a-entity');
                // // Change this to the type of object you want to replace it with

                // // Model loaded successfully, you can use it in your scene
                // console.log('Parent before adding cheese', parent);
                // console.log('Position before adding cheese', position)
                // console.log('Model loaded successfully!');
                // newObject.setAttribute('gltf-model', '#fryingPan');
                // newObject.setAttribute('scale', '0.1 0.1 0.1');
                // newObject.setAttribute('position', '23 0 -14');
                // newObject.setAttribute('id', 'fryingPan2');
                // // newObject.setAttribute('collision-tracker', '');
                // parent.appendChild(newObject);
                // // newObject.setAttribute('body', 'shape:box; mass:2');
                // // newObject.setAttribute('grabbable', '');









                // setTimeout(() => {
                //     console.log("triggered after 7 seconds" + cheeseDispenser)
                //     redLever.setAttribute('animation', {
                //         property: 'scale',
                //         to: '0.04 0.04 0.04',
                //         dur: 3000,
                //         easing: 'linear'
                //     });
                // }, 7000);
            }



        });
    }
});


AFRAME.registerComponent('start-particles-on-click2', {
    init: function () {
        this.el.addEventListener('click', () => {
            ketchupDispensingCounter = ketchupDispensingCounter + 1;

            if (ketchupDispensingCounter == 1) {

                console.log("Particles are being clicked! Ketchup");
                var ketchupDispenser = document.querySelector('#ketchupDispenser');

                var redLever2 = document.querySelector('#redlever2');

                var redLever = document.querySelector('#redlever');


                // Create and enable the particle system
                // setTimeout(() => {
                //     cheeseDispenser.setAttribute('particle-system', {
                //         preset: 'default',
                //         color: '#FFD700',
                //         velocityValue: '0 -1 0',
                //         velocitySpread: '0.5 0.5 0.5',
                //         texture: 'cheese-transp-backgrnd-removebg-preview.png',
                //         size: 0.4,
                //         duration: 5,
                //         sizeSpread: 1,
                //         accelerationSpread: '0.5 10 0.5',
                //         maxAge: 0.6,
                //         accelerationValue: '0 -5 0',
                //         enabled: true,
                //         particleCount: 50
                //     });
                // }, 1000);

                ketchupDispenser.setAttribute('particle-system',
                    'preset: default; color: #a70000; velocityValue: 0 -1 0; velocitySpread: 0.5 0.5 0.5; texture: ketchup-sauce-removebg-preview.png; size: 0.4; duration: 5; sizeSpread: 1; accelerationSpread: 0.5 10 0.5; maxAge: 0.6; accelerationValue: 0 -5 0; enabled: true; blending: 1; particleCount: 50'
                );

                // ketchupDispenser.setAttribute('particle-system',
                //     'preset: default; color: #a70000; velocityValue: 0 -1 0; velocitySpread: 0.5 0.5 0.5; texture: ketchup-sauce-removebg-preview.png; size: 0.4; duration: 5; sizeSpread: 1; accelerationSpread: 0.5 10 0.5; maxAge: 0.6; accelerationValue: 0 -5 0; enabled: true; particleCount: 50'
                // );




                // Start the particles after a delay of 1 second
                setTimeout(() => {
                    // Enable the particle system
                    ketchupDispenser.setAttribute('particle-system', 'enabled', true);
                    ketchupDispenser.components['particle-system'].startParticles();
                }, 1000);


                // setTimeout(() => {
                //     // Enable the particle system
                //     cheeseDispenser.setAttribute('particle-system', 'enabled', false);
                //     cheeseDispenser.components['particle-system'].stopParticles();
                // }, 5000);

                // Return to original rotation after 5 seconds
                setTimeout(() => {
                    console.log("triggered after 5.5 seconds lever gets back to normal")

                    // console.log("triggered after 7 seconds" + this.el)
                    // redLever2.setAttribute('animation', {
                    //     property: 'rotation',
                    //     to: '20 0 0',
                    //     dur: 2500,
                    //     easing: 'easeOutQuad'
                    // });

                    redLever.setAttribute('animation',
                        'property: rotation; to: 20 0 0; dur: 2500; easing: linear'
                    );
                    // redLever2.setAttribute('animation',
                    //     'property: position; from: 6 3.6 -14.5; to: 7 3.6 -14.5; dur: 2500; easing: easeOutQuad'
                    // );


                    console.log("animation added on redlever2")
                }, 5500);

                // Remove the particle system after 7 seconds
                setTimeout(() => {
                    console.log('Deleted the particle system attribute Ketchup')
                    ketchupDispenser.removeAttribute('particle-system');


                }, 7000);

                setTimeout(() => {
                    const oldDough = document.getElementById('emptyDough');
                    let parent = oldDough.parentElement;
                    let position = oldDough.getAttribute('position');
                    parent.removeChild(oldDough);
                    console.log('Parent before adding ketchup', parent);
                    console.log('Position before adding ketchup', position);
                    const newObject = document.createElement('a-entity'); // Change this to the type of object you want to replace it with
                    newObject.setAttribute('gltf-model', '#sauce-pizza');
                    newObject.setAttribute('scale', '0.04 0.04 0.04');
                    newObject.setAttribute('position', position);
                    newObject.setAttribute('id', 'pizza-sauce2');
                    newObject.setAttribute('collision-tracker', '');
                    parent.appendChild(newObject);
                    // newObject.setAttribute('body', 'shape:box; mass:10; friction:1; linearDamping: 0.5');
                    newObject.setAttribute('body', 'shape:box; mass:10');
                    newObject.setAttribute('grabbable', '');

                }, 5500);






                // setTimeout(() => {
                //     console.log("triggered after 7 seconds" + cheeseDispenser)
                //     redLever.setAttribute('animation', {
                //         property: 'scale',
                //         to: '0.04 0.04 0.04',
                //         dur: 3000,
                //         easing: 'linear'
                //     });
                // }, 7000);
            }



        });
    }
});
