import * as THREE from "three";
import { useEffect, useRef } from "react";
import "./StarBackground.styles.scss";
import StarImg from "../../assets/star.png";

export const StarBackground = ({ children }) => {
  const mountRef = useRef(null);
  // USE THIS FOR LINES INSTEAD OF DOTS
  //useEffect(() => {
  //   let LINE_COUNT = 100;
  //   const geometry = new THREE.BufferGeometry();
  //   geometry.setAttribute(
  //     "position",
  //     new THREE.BufferAttribute(new Float32Array(6 * LINE_COUNT), 3)
  //   );
  //   geometry.setAttribute(
  //     "velocity",
  //     new THREE.BufferAttribute(new Float32Array(2 * LINE_COUNT), 1)
  //   );
  //   const pos = geometry.getAttribute("position");
  //   const pa = pos.array;
  //   const vel = geometry.getAttribute("velocity");
  //   const va = vel.array;
  //   // end attributes

  //   let scene, camera, renderer;

  //   function init() {
  //     scene = new THREE.Scene();
  //     camera = new THREE.PerspectiveCamera(
  //       60,
  //       window.innerWidth / window.innerHeight,
  //       1,
  //       500
  //     );
  //     camera.position.z = 200;

  //     renderer = new THREE.WebGLRenderer({ antialias: true });
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     mountRef.current.appendChild(renderer.domElement);

  //     for (let line_index = 0; line_index < LINE_COUNT; line_index++) {
  //       var x = Math.random() * 400 - 200;
  //       var y = Math.random() * 200 - 100;
  //       var z = Math.random() * 500 - 100;
  //       var xx = x;
  //       var yy = y;
  //       var zz = z;
  //       //line start
  //       pa[6 * line_index] = x;
  //       pa[6 * line_index + 1] = y;
  //       pa[6 * line_index + 2] = z;
  //       //line end
  //       pa[6 * line_index + 3] = xx;
  //       pa[6 * line_index + 4] = yy;
  //       pa[6 * line_index + 5] = zz;

  //       va[2 * line_index] = va[2 * line_index + 1] = 0;
  //     }
  //     //debugger
  //     let mat = new THREE.LineBasicMaterial({ color: 0xffffff });
  //     let lines = new THREE.LineSegments(geometry, mat);
  //     scene.add(lines);

  //     window.addEventListener("resize", onWindowResize, false);
  //     animate();
  //   }

  //   function onWindowResize() {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   }

  //   function animate() {
  //     for (let line_index = 0; line_index < LINE_COUNT; line_index++) {
  //       va[2 * line_index] += 0.005; //increase velcoity by the acceleration amount
  //       va[2 * line_index + 1] += 0.004;

  //       pa[6 * line_index + 2] += va[2 * line_index]; //z

  //       pa[6 * line_index + 5] += va[2 * line_index + 1]; //z

  //       if (pa[6 * line_index + 5] > 200) {
  //         var z = Math.random() * 200 - 100;
  //         pa[6 * line_index + 2] = z;
  //         pa[6 * line_index + 5] = z;
  //         va[2 * line_index] = 0;
  //         va[2 * line_index + 1] = 0;
  //       }
  //     }

  //     pos.needsUpdate = true;
  //     requestAnimationFrame(animate);
  //     renderer.render(scene, camera);
  //   }
  //   init();

  //   return () => {
  //     mountRef.current.removeChild(mountRef.current.children[0])
  //     geometry.dispose()

  //   };

  //   // === THREE.JS EXAMPLE CODE END ===
  // }, []);

  useEffect(() => {
    let scene, camera, renderer, starGeo, stars;
    const positions = [];
    const velocities = [];
    const accelerations = [];
    function init() {
      //create scene object
      scene = new THREE.Scene();

      //setup camera with facing upward
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      //setup renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();
      for (let i = 0; i < 8000; i++) {
        positions.push(Math.random() * 600 - 300);
        positions.push(Math.random() * 600 - 300);
        positions.push(Math.random() * 600 - 300);

        velocities.push(0);
        accelerations.push(Math.random() * (0.02 - 0.01) + 0.01); //gives a unique speed starting point, Math.random() * (max-min) + min
      }
      starGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );

      let sprite = new THREE.TextureLoader().load(StarImg);
      let starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        map: sprite,
      });

      stars = new THREE.Points(starGeo, starMaterial);

      scene.add(stars);
      window.addEventListener("resize", onWindowResize, false);
      animate();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    //rendering loop
    function animate() {
      const positionAttribute = starGeo.getAttribute("position");
      for (let i = 0; i < positionAttribute.count; i++) {
        let y = positionAttribute.getY(i);
        let vel = velocities[i];
        vel += accelerations[i];
        y -= vel;
        velocities[i] = vel;

        if (y < -400) {
          y = 400 - Math.random() * 400;
          velocities[i] = 0;
          //this whole if statement basically resets stars to point 0
        }

        positionAttribute.setY(i, y);
      }
      positionAttribute.needsUpdate = true;
      stars.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    init();
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };

    // === THREE.JS EXAMPLE CODE END ===
  }, []);

  return <div ref={mountRef}>{children}</div>;
};
