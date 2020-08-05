const  { Engine , Render ,Runner , World ,Bodies , MouseConstraint ,Mouse} = Matter ;
const engine = Engine.create();
const {world} = engine;
console.log(world);
const width = 800;
const height = 400;
const render = Render.create({
    element : document.body,
    engine : engine,

    options : {
        wireframes : false,
        width,
        height
    }
});

Render.run(render);
Runner.run(Runner.create(),engine);


// console.log(render.canvas);
for (let index = 0; index < 20; index++) {
    if(Math.random() > 0.5){
        World.add(
          world,
          Bodies.circle(
            Math.random() * width,
            Math.random() * height,
            35
          )
        );        
    }else{

        World.add(
          world,
          Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50, {})
        );
    }
}


World.add(world,MouseConstraint.create(engine,{
    mouse:Mouse.create(render.canvas)
}));
// walls
const walls = [
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
    Bodies.rectangle(400, 400, 800, 40, { isStatic: true }),
    Bodies.rectangle(0, 200, 40, 800, { isStatic: true }),
    Bodies.rectangle(800, 200, 40, 400, { isStatic: true }),
];

World.add(world,walls);

const grid = Array(3).fill(null).map(() => Array(3).fill(false));
console.log(grid);