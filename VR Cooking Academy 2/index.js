
window.onload = function () {

    let doughmax1 = 0;
    let rollingPin_Dough_Collision = 0;
    let pepCount = 0;
    let lastpepperoniaddedcounter = 0;
    let openopenandpepperonipizzacollision = 0;
    let birthdaycounter = 0;

    const nextRecipe = () => {
        i = i + 1;
        console.log(i);
        if (i > 10) {
            return;
        }
        // if (i == 4) {
        //     if (document.getElementById("emptyDough") == null) {
        //         console.log("You have not yet rolled the dough!");
        //         let recipe = document.getElementById("recipe");
        //         i--;
        //         console.log("Before Setting the red color ", recipe);
        //         recipe.setAttribute('color', "red");
        //         // let recipe2 = document.getElementById("recipe");

        //         console.log("Before removing the attribute value ", recipe);
        //         recipe.removeAttribute('value');

        //         console.log("After removing the attribute value ", recipe);
        //         recipe.setAttribute('value', "You have not yet rolled the dough!");

        //         console.log("After setting the new attribute value ", recipe);
        //         // for (let i = 0; i < 100; i++) {
        //         // }
        //         // recipe.setAttribute('color', "purple");

        //     }
        // }

        if (i == 4) {
            if (document.getElementById("emptyDough") == null) {
                console.log("You have not yet rolled the dough!");
                let recipe = document.getElementById("recipe");
                i--;
                console.log("Before Setting the red color ", recipe);
                recipe.setAttribute('color', "red");

                console.log("Before removing the attribute value ", recipe);
                recipe.removeAttribute('value');

                console.log("After removing the attribute value ", recipe);
                setTimeout(function () {
                    recipe.setAttribute('value', "You have not yet rolled the dough!");
                    console.log("After setting the new attribute value ", recipe);
                }, 0);
            }
            else {
                let recipe = document.getElementById("recipe");
                recipe.setAttribute('color', "purple");
            }
        }

        if (i == 5) {

            if (document.getElementById("pizza-sauce2") == null) {
                console.log("Did not add the pizza sauce!");
                i--;
                let recipe = document.getElementById("recipe");
                recipe.setAttribute('color', "red");

                setTimeout(function () {
                    recipe.setAttribute('value', "You have not yet added the pizza sauce!");

                }, 0);
                // recipe.setAttribute('value', "You have not yet added the pizza sauce!");

            }
            else {
                let recipe = document.getElementById("recipe");
                recipe.setAttribute('color', "purple");
            }
        }

        if (i == 6) {
            if (document.getElementById('pizza-cheese') == null) {
                console.log("Did not add the cheese on the pizza yet!");
                i--;
                let recipe = document.getElementById("recipe");
                recipe.setAttribute('color', "red");

                setTimeout(function () {
                    recipe.setAttribute('value', "You have not yet added the cheese on the pizza yet!");

                }, 0);
                // recipe.setAttribute('value', "You have not yet added the cheese on the pizza yet!");
            }
            else {

                let recipe = document.getElementById("recipe");
                recipe.setAttribute('color', "purple");

            }
        }

        if (i == 7) {
            if (document.getElementById('pepperoni-pizza') == null) {
                console.log("Did not add the 3 pieces of pepperoni yet!");
                i--;
                let recipe = document.getElementById("recipe");
                recipe.setAttribute('color', "red");

                setTimeout(function () {
                    recipe.setAttribute('value', "You have not yet added the pieces of Pepperoni yet!");

                }, 0);
                // recipe.setAttribute('value', "You have not yet added the 3 pieces of Pepperoni yet!");
            }
            else {

                let recipe = document.getElementById("recipe");
                recipe.setAttribute('color', "purple");

            }
        }

        if (i == 8) {
            if (document.getElementById('complete-pizza') == null) {
                console.log("You did not cook the pizza in the oven yet");
                i--;
                let recipe = document.getElementById("recipe");
                recipe.setAttribute('color', "red");
                setTimeout(function () {
                    recipe.setAttribute('value', "You did not cook the pizza in the oven yet!");

                }, 0);
                // recipe.setAttribute('value', "You did not cook the pizza in the oven yet!");
            }
            else {

                let recipe = document.getElementById("recipe");
                recipe.setAttribute('color', "purple");

            }
        }

        if (i == 9) {
            console.log("Tutorial Complete!");

            // var celebrationparticles = document.querySelector('#celebration');
            // if (birthdaycounter == 0) {
            //     celebrationparticles.setAttribute('particle-system',
            //         'preset: default; color: #f9e154; accelerationValue: 0 -5 0; particleCount: 3000; direction: -1; rotationAxis: x; rotation: 0 0 0'
            //     );

            //     setTimeout(() => {
            //         console.log('Deleted the celebration particle system attribute');
            //         celebrationparticles.removeAttribute('particle-system');


            //     }, 10000);

            // }
            // birthdaycounter = birthdaycounter + 1;

            console.log("Birthday Counter is " + birthdaycounter);
            i--;


        }

        // if (i == 8) {
        //     if (document.getElementById('pepperoni-pizza') == null) {
        //         console.log("You have not put the pizza in the oven yet!");
        //         i--;
        //         let recipe = document.getElementById("recipe");
        //         recipe.setAttribute('color', "red");
        //         recipe.setAttribute('value', "You have not put the pizza in the oven yet!");
        //     }
        // }


        console.log("logging i before the recipe" + i);
        let recipe = document.getElementById("recipe");
        const text = recipes[i];
        recipe.setAttribute('value', text);
    }

    const previousRecipe = () => {
        i = i - 1
        console.log(i);
        if (i < 1) {
            return;
        }
        let recipe = document.getElementById("recipe");
        const text = recipes[i];
        recipe.setAttribute('value', text);
    }




    let grabbedObject = null;
    let i = 1;

    let recipes = {
        1: 'Hello! Welcome to the Virtual Cooking Academy\n\n Please press on next',
        2: 'We are going to cook a peperoni pizza today',
        3: 'Let us start off with rolling the dough!',
        4: 'Nice!\nThe pizza dough is ready let us put the sauce now',
        5: 'Wow you are becoming an actual chef!\n Let us now place the cheese on the pizza',
        6: 'Great, Next let us place the pepperoni on the pizza',
        7: 'Excellent job, now cook the pizza in the oven for 30mins',
        8: 'Wow! You have just cooked a virtual pizza'
    }

    console.log("Running...");

    const next = document.getElementById("next");
    next.addEventListener("click", nextRecipe);
    const back = document.getElementById("back");
    back.addEventListener("click", previousRecipe);


    const startcooking = document.getElementById("startcooking");
    const oventime = document.getElementById("oventime");
    const ovendoor2 = document.getElementById("ovendoor");
    // const PizzaInOven = document.getElementById("pizza-in-oven");

    function changeText() {

        setTimeout(() => {
            oventime.setAttribute('value', 'DONE');
            ovendoor2.setAttribute('animation',
                'property: rotation; to: 80 0 0; dur: 2000; easing: easeInQuad'
            );

            // byerjaa lezim ma7e l model l juwa eza ken fi whd w aamol whd jdid li huwe final pizza
            let PizzaInOven = document.getElementById("pizza-in-oven");
            let finalOven = document.getElementById("final-oven");

            console.log(PizzaInOven);
            if (PizzaInOven != null) {
                console.log("ENTERED PIZZAINOVEN NOT NULL IF");
                let parent = PizzaInOven.parentElement;
                PizzaInOven.parentElement.removeChild(PizzaInOven);
                //Play sound
                finalOven.components.sound.playSound();

                const newObject4 = document.createElement('a-entity');
                newObject4.setAttribute('gltf-model', '#final-pizza');
                newObject4.setAttribute('position', '-4.5 -3.1 -13.6');
                newObject4.setAttribute('id', 'complete-pizza');
                newObject4.setAttribute('scale', '2 1 1.6');
                // newObject4.setAttribute('color', collider.getAttribute('color'));
                newObject4.setAttribute('shadow', 'cast: true; receive: false');
                newObject4.setAttribute('class', 'collider');
                newObject4.setAttribute('body', 'shape:box');
                newObject4.setAttribute('grabbable', '');
                newObject4.setAttribute('aabb-collider', 'objects: .collider');
                // newObject4.setAttribute('collision-tracker', '');
                parent.appendChild(newObject4);



                nextRecipe();
                var celebrationparticles = document.querySelector('#celebration');
                if (birthdaycounter == 0) {
                    celebrationparticles.setAttribute('particle-system',
                        'preset: default; color: #f9e154; accelerationValue: 0 -5 0; particleCount: 3000; direction: -1; rotationAxis: x; rotation: 0 0 0'
                    );

                    setTimeout(() => {
                        console.log('Deleted the celebration particle system attribute');
                        celebrationparticles.removeAttribute('particle-system');


                    }, 10000);

                }
                birthdaycounter = birthdaycounter + 1;
            }
        }, 3000)

    }

    startcooking.addEventListener("click", changeText);


    const colliders = document.querySelectorAll('.collider');
    // Loop through each collider object and add an event listener for the "collide" event
    colliders.forEach(collider => {
        collider.addEventListener('grab-start', function (event) {
            // Retrieve the grabbed object
            grabbedObject = event.detail.target;
            //rotate the position of the object
            if (grabbedObject.id === "cut") {
                grabbedObject.setAttribute("rotation", { x: 0, y: -90, z: 0 });
                console.log(`Grabbed object: ${grabbedObject.id}`);
            }
        });

        collider.addEventListener('collide', e => {
            // Get the collided object
            const collidedObject = e.detail.body.el;

            // Log the collided object to the console
            //console.log(`Object ${collider.id} collided with object ${collidedObject.id}`);
            if (collider.id == "blue" && collidedObject.id == "yellow") {
            }

            if (collider.id === "rolling-pin" && collidedObject.id == "small-dough") {
                rollingPin_Dough_Collision = rollingPin_Dough_Collision + 1;

                if (rollingPin_Dough_Collision == 1) {


                    console.log("Colliding with rolling pin!");
                    const rollingPin = collider.getObject3D('mesh');
                    // Get the velocity of the rolling pin object
                    console.log(rollingPin);
                    //Expand collided object with animation
                    console.log("The object is in speed");
                    //Expand collided object with animation in x direction

                    collidedObject.setAttribute('animation', {
                        property: 'scale',
                        to: '0.04 0.04 0.04',
                        dur: 3000,
                        easing: 'linear'
                    });
                    //Delete the object after that and replace it with another object
                    setTimeout(() => {
                        let position = collidedObject.getAttribute('position');
                        let parent = collidedObject.parentElement;
                        collidedObject.parentElement.removeChild(collidedObject);
                        const newObject = document.createElement('a-entity'); // Change this to the type of object you want to replace it with
                        newObject.setAttribute('gltf-model', '#emptyCrust');
                        newObject.setAttribute('scale', '0.025 0.025 0.025');
                        newObject.setAttribute('position', position);
                        newObject.setAttribute('id', 'emptyDough');
                        newObject.setAttribute('body', 'shape:box');
                        newObject.setAttribute('grabbable', '');
                        // newObject.setAttribute('collision-tracker', '');
                        parent.appendChild(newObject);
                    }, 3000)
                }


            }

            // ZIDA LA NSHUF MIN COLLIDING MAA MIN
            // console.log("Collider is: " + collider.id + " and Colliding is: " + collidedObject.id)


            // console.log("doughmax1 before if statement is " + doughmax1);
            if (collidedObject.id === "small-dough" && collider.id == "knife") {
                doughmax1 = doughmax1 + 1;
                //Cut the object in half
                console.log("Collided with knife")
                // console.log("doughmax1 entering if statement is " + doughmax1);
                if (doughmax1 == 1) {


                    setTimeout(() => {
                        let position = collidedObject.getAttribute('position');
                        let parent = collidedObject.parentElement;
                        collidedObject.parentElement.removeChild(collidedObject);
                        const newObject = document.createElement('a-entity'); // Change this to the type of object you want to replace it with
                        newObject.setAttribute('gltf-model', '#circle-dough');
                        newObject.setAttribute('position', { x: collidedObject.getAttribute('position').x, y: collidedObject.getAttribute('position').y, z: collidedObject.getAttribute('position').z });
                        newObject.setAttribute('id', 'NEW-SMALL-DOUGH-HALF-ORIGINAL');
                        // newObject.setAttribute('radius', object.getAttribute('radius') / 2);
                        // newObject.setAttribute('height', object.getAttribute('height') / 2);
                        newObject.setAttribute('scale', '0.01 0.01 0.01');
                        // newObject.setAttribute('color', object.getAttribute('color'));
                        newObject.setAttribute('shadow', 'cast: true; receive: false');
                        newObject.setAttribute('class', 'collider');
                        newObject.setAttribute('body', 'shape:box');
                        newObject.setAttribute('grabbable', '');
                        newObject.setAttribute('aabb-collider', 'objects: .collider');
                        // newObject.setAttribute('collision-tracker', '');
                        parent.appendChild(newObject);




                        const newObject2 = document.createElement('a-entity');
                        newObject2.setAttribute('gltf-model', '#circle-dough');
                        newObject2.setAttribute('position', { x: collidedObject.getAttribute('position').x + 1, y: collidedObject.getAttribute('position').y, z: collidedObject.getAttribute('position').z });
                        newObject2.setAttribute('id', 'NEW-SMALL-DOUGH-HALF');
                        // newObject.setAttribute('radius', object.getAttribute('radius') / 2);
                        // newObject.setAttribute('height', object.getAttribute('height') / 2);
                        newObject2.setAttribute('scale', '0.01 0.01 0.01');
                        newObject2.setAttribute('color', collidedObject.getAttribute('color'));
                        newObject2.setAttribute('shadow', 'cast: true; receive: false');
                        newObject2.setAttribute('class', 'collider');
                        newObject2.setAttribute('body', 'shape:box');
                        newObject2.setAttribute('grabbable', '');
                        newObject2.setAttribute('aabb-collider', 'objects: .collider');
                        // newObject2.setAttribute('collision-tracker', '');


                        // Append the new entity to the scene
                        parent.appendChild(newObject2);
                    }, 1000)

                    cutObjectinHalf(collidedObject);
                }


            }

            // if (collider.classList.contains("pep") && collidedObject.id == "pizza-cheese") {
            //     console.log("Pepperoni colliding with cheese pizza");
            //     const pizzaSauce = document.getElementById("cheese-pizza");
            //     pepCount++;
            //     console.log("PepCount after increment " + pepCount)
            //     if (pepCount == 3) {

            //     }
            // }

            if ((collider.id == "pepperoniPiece1" || collider.id == "pepperoniPiece2" || collider.id == "pepperoniPiece3" || collider.id == "pepperoniPiece4" || collider.id == "pepperoniPiece5" || collider.id == "pepperoniPiece6" || collider.id == "pepperoniPiece7") && collidedObject.id == "pizza-cheese") {
                console.log("Pepperoni colliding with cheese pizza");
                const pizzaSauce = document.getElementById("cheese-pizza");
                pepCount++;
                if (pepCount < 3) {
                    collider.removeAttribute('id');
                    collider.classList.add('PiecesAddedOnPizza');

                }

                console.log("PepCount after increment " + pepCount)
                if (pepCount == 3) {
                    console.log("SHOULD STOP")
                    lastpepperoniaddedcounter = lastpepperoniaddedcounter + 1;

                    if (lastpepperoniaddedcounter == 1) {
                        collider.classList.add('PiecesAddedOnPizza');
                    }


                    let pepperoniPieces = document.getElementsByClassName('pep');
                    for (let i = 0; i < pepperoniPieces.length; i++) {
                        if (pepperoniPieces[i].id) {
                            pepperoniPieces[i].removeAttribute('id');
                        }

                    }
                    let position = collidedObject.getAttribute('position');
                    let parent = collidedObject.parentElement;
                    collidedObject.parentElement.removeChild(collidedObject);

                    let elements = document.getElementsByClassName('PiecesAddedOnPizza');
                    while (elements.length > 0) {
                        elements[0].parentNode.removeChild(elements[0]);
                    }



                    const newObject3 = document.createElement('a-entity');
                    newObject3.setAttribute('gltf-model', '#pepperoni-on-pizza');
                    newObject3.setAttribute('position', position);
                    // newObject3.setAttribute('id', 'NEW-SMALL-DOUGH-HALF');
                    // newObject.setAttribute('radius', object.getAttribute('radius') / 2);
                    // newObject.setAttribute('height', object.getAttribute('height') / 2);
                    newObject3.setAttribute('scale', '0.03 0.03 0.03');
                    newObject3.setAttribute('color', collidedObject.getAttribute('color'));
                    newObject3.setAttribute('shadow', 'cast: true; receive: false');
                    newObject3.setAttribute('class', 'collider');
                    newObject3.setAttribute('body', 'shape:box');
                    newObject3.setAttribute('id', 'pepperoni-pizza');
                    newObject3.setAttribute('grabbable', '');
                    newObject3.setAttribute('aabb-collider', 'objects: .collider');
                    // newObject3.setAttribute('collision-tracker', '');
                    parent.appendChild(newObject3);

                }
            }

            // console.log(`Object Collider ${collider.id} collided with object ${collidedObject.id}`);

            // if (collidedObject.id == "stovee" && collider.id == "pepperoni-pizza") {
            //     console.log("COLLISION HAPPENED BETWEEN normal stove AND PEPPERONI PIZZA");
            // }


            // if (collidedObject.id == "ovendoor" && collider.id == "pepperoni-pizza") {

            if (collidedObject.id == "pepperoni-pizza" && collider.id == "ovendoor") {

                openopenandpepperonipizzacollision = openopenandpepperonipizzacollision + 1;

                if (openopenandpepperonipizzacollision == 1) {
                    console.log("COLLISION HAPPENED BETWEEN OVEN DOOR AND PEPPERONI PIZZA");

                    // let parent = collider.parentElement;
                    // collider.parentElement.removeChild(collider);

                    let parent = collidedObject.parentElement;
                    collidedObject.parentElement.removeChild(collidedObject);


                    const newObject3 = document.createElement('a-entity');
                    newObject3.setAttribute('gltf-model', '#pepperoni-on-pizza');
                    newObject3.setAttribute('position', '-4.5 -4.1 -13.6');
                    // newObject3.setAttribute('id', 'NEW-SMALL-DOUGH-HALF');
                    // newObject.setAttribute('radius', object.getAttribute('radius') / 2);
                    // newObject.setAttribute('height', object.getAttribute('height') / 2);
                    newObject3.setAttribute('scale', '0.03 0.03 0.02');
                    newObject3.setAttribute('color', collider.getAttribute('color'));
                    newObject3.setAttribute('shadow', 'cast: true; receive: false');
                    // newObject3.setAttribute('class', 'collider');
                    // newObject3.setAttribute('body', 'shape:box');
                    newObject3.setAttribute('id', 'pizza-in-oven');
                    // newObject3.setAttribute('grabbable', '');
                    // newObject3.setAttribute('aabb-collider', 'objects: .collider');
                    // newObject3.setAttribute('collision-tracker', '');
                    parent.appendChild(newObject3);
                }


            }

        });

        //Add event listner for Gyroscope and for accelrometer
        window.addEventListener("deviceorientation", handleOrientation, true);
    });

    const cutObjectinHalf = (object) => {

        object.setAttribute('animation', {
            property: 'scale',
            to: '0.01 0.01 0.01', // Adjust the scale as needed
            dur: 1000,
            easing: 'linear',
        });

        setTimeout(() => {
            // let position = collidedObject.getAttribute('position');
            // let parent = collidedObject.parentElement;
            // collidedObject.parentElement.removeChild(collidedObject);
            // const newObject = document.createElement('a-entity'); // Change this to the type of object you want to replace it with
            // newObject.setAttribute('gltf-model', '#emptyCrust');
            // newObject.setAttribute('scale', '0.025 0.025 0.025');
            // newObject.setAttribute('position', position);
            // newObject.setAttribute('id', 'emptyDough');
            // newObject.setAttribute('body', 'shape:box');
            // newObject.setAttribute('grabbable', '');
            // newObject.setAttribute('collision-tracker', '');
            // parent.appendChild(newObject);


            // let parent = collidedObject.parentElement;
            // collidedObject.parentElement.removeChild(collidedObject);
            // const newObject2 = document.createElement('a-entity');
            // newObject2.setAttribute('gltf-model', '#circle-dough');
            // newObject2.setAttribute('position', { x: object.getAttribute('position').x, y: object.getAttribute('position').y, z: object.getAttribute('position').z });
            // newObject2.setAttribute('id', 'NEW-SMALL-DOUGH-HALF-ORIGINAL');
            // // newObject.setAttribute('radius', object.getAttribute('radius') / 2);
            // // newObject.setAttribute('height', object.getAttribute('height') / 2);
            // newObject2.setAttribute('scale', '0.01 0.01 0.01');
            // newObject2.setAttribute('color', object.getAttribute('color'));
            // newObject2.setAttribute('shadow', 'cast: true; receive: false');
            // newObject2.setAttribute('class', 'collider');
            // newObject2.setAttribute('body', 'shape:box');
            // newObject2.setAttribute('grabbable', '');
            // newObject2.setAttribute('aabb-collider', 'objects: .collider');
            // newObject2.setAttribute('collision-tracker', '');

            // object.parentElement.appendChild(newObject2);


            // const newObject2 = document.createElement('a-entity');
            // newObject2.setAttribute('gltf-model', '#circle-dough');
            // newObject2.setAttribute('position', { x: object.getAttribute('position').x + 1, y: object.getAttribute('position').y, z: object.getAttribute('position').z });
            // newObject2.setAttribute('id', 'NEW-SMALL-DOUGH-HALF');
            // // newObject.setAttribute('radius', object.getAttribute('radius') / 2);
            // // newObject.setAttribute('height', object.getAttribute('height') / 2);
            // newObject2.setAttribute('scale', '0.01 0.01 0.01');
            // newObject2.setAttribute('color', object.getAttribute('color'));
            // newObject2.setAttribute('shadow', 'cast: true; receive: false');
            // newObject2.setAttribute('class', 'collider');
            // newObject2.setAttribute('body', 'shape:box');
            // newObject2.setAttribute('grabbable', '');
            // newObject2.setAttribute('aabb-collider', 'objects: .collider');
            // newObject2.setAttribute('collision-tracker', '');


            // // Append the new entity to the scene
            // object.parentElement.appendChild(newObject2);


        }, 2000)


        // const newObject = document.createElement('a-entity');
        // newObject.setAttribute('gltf-model', '#circle-dough');
        // newObject.setAttribute('position', { x: object.getAttribute('position').x + 1, y: object.getAttribute('position').y, z: object.getAttribute('position').z });
        // newObject.setAttribute('id', 'NEW-SMALL-DOUGH-HALF');
        // // newObject.setAttribute('radius', object.getAttribute('radius') / 2);
        // // newObject.setAttribute('height', object.getAttribute('height') / 2);
        // newObject.setAttribute('scale', '0.01 0.01 0.01');
        // newObject.setAttribute('color', object.getAttribute('color'));
        // newObject.setAttribute('shadow', 'cast: true; receive: false');
        // newObject.setAttribute('class', 'collider');
        // newObject.setAttribute('body', 'shape:box');
        // newObject.setAttribute('grabbable', '');
        // newObject.setAttribute('aabb-collider', 'objects: .collider');
        // newObject.setAttribute('collision-tracker', '');


        // // Append the new entity to the scene
        // object.parentElement.appendChild(newObject);
    }

    function handleOrientation(gyroscope) {
        const absolute = gyroscope.absolute;
        const alpha = gyroscope.alpha;
        const beta = gyroscope.beta;
        const gamma = gyroscope.gamma;

        // Move camera based on change in orientation
        const camera = document.getElementById('pov');

        if (gyroscope.x > 0.5) {
            camera.setAttribute('position', { x: camera.getAttribute('position').x + 0.1, y: camera.getAttribute('position').y, z: camera.getAttribute('position').z });
        }
        if (gyroscope.x < -0.5) {
            camera.setAttribute('position', { x: camera.getAttribute('position').x - 0.1, y: camera.getAttribute('position').y, z: camera.getAttribute('position').z });
        }
        if (gyroscope.y > 0.5) {
            camera.setAttribute('position', { x: camera.getAttribute('position').x, y: camera.getAttribute('position').y + 0.1, z: camera.getAttribute('position').z });
        }
        if (gyroscope.y < -0.5) {
            camera.setAttribute('position', { x: camera.getAttribute('position').x, y: camera.getAttribute('position').y - 0.1, z: camera.getAttribute('position').z });
        }
        if (gyroscope.z > 0.5) {
            camera.setAttribute('position', { x: camera.getAttribute('position').x, y: camera.getAttribute('position').y, z: camera.getAttribute('position').z + 0.1 });
        }
        if (gyroscope.z < -0.5) {
            camera.setAttribute('position', { x: camera.getAttribute('position').x, y: camera.getAttribute('position').y, z: camera.getAttribute('position').z - 0.1 });
        }

    }




    // AFRAME.registerComponent('click-handler', {
    //     init: function () {
    //         var el = this.el;
    //         var sound = document.getElementById('stove-sound');

    //         el.addEventListener('click', function () {
    //             sound.play();
    //             // Add your additional logic here when the entity is clicked
    //         });
    //     }
    // });
}
