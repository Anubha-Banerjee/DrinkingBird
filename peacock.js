  var camera, scene, renderer;
      var cameraControls, effectController;
      var clock = new THREE.Clock();
      var ground = true;

      init();
      addToDOM();
      setupGui();
      animate();



      function init()
      {
      var canvasWidth = 846 * 1.4;
      var canvasHeight = 494 * 1.4;
      var canvasRatio = canvasWidth / canvasHeight;

      // RENDERER
      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.gammaInput = true;
      renderer.gammaOutput = true;
      renderer.setSize(canvasWidth, canvasHeight);
      renderer.setClearColorHex( 0xA9ACB6, 1.0 );

      // CAMERA
      camera = new THREE.PerspectiveCamera( 45, canvasRatio, 1, 40000 );
      // CONTROLS
      cameraControls = new THREE.OrbitAndPanControls(camera, renderer.domElement);

      camera.position.set( 680, 800, -919);
      cameraControls.target.set(4,301,92);

      fillScene();
      }

  
	  function createCrown()
	  {
	    var ball_radius = 8	;
		var crown_height = 50;

		// real peackock colors
		var sphereMaterial = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x009ACD, specular: 0x555555, shininess: 120 } );
		var cylinderMaterial =  new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0xFFFFFF, specular: 0x555555, shininess: 120 } );

		// colorful crown
	    //var sphereMaterial = new THREE.MeshLambertMaterial( { color: 0xDC143C } );
		//var cylinderMaterial = new THREE.MeshLambertMaterial( { color: 0x8B008B } );

		var sphere, cylinder;
		sphere = new THREE.Mesh(
		new THREE.SphereGeometry( ball_radius, 12, 12 ), sphereMaterial );

		// first feather
		sphere.position.x = -30;	
		sphere.position.y = 556 + crown_height - 10;	
		sphere.position.z = 0;	
		scene.add( sphere );

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( ball_radius/3, ball_radius/4, crown_height, 32, 10), cylinderMaterial);
			
		
		cylinder.position.x = -20;	
		cylinder.position.y = 556 + crown_height/2 - 8;	
		cylinder.position.z = 0;	

		cylinder.rotation.z = 30 * Math.PI/180;	
		scene.add( cylinder );

		// second feather
		sphere = new THREE.Mesh(
		new THREE.SphereGeometry( ball_radius, 12, 12 ), sphereMaterial );


		sphere.position.x = -45;	
		sphere.position.y = 556 + crown_height - 20;	
		sphere.position.z = 0;	
		scene.add( sphere );

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( ball_radius/3, ball_radius/4, crown_height - 2 , 32, 10), cylinderMaterial);
			
		
		cylinder.position.x = -30;	
		cylinder.position.y = 556 + crown_height/2 - 12;	
		cylinder.position.z = 0;	

		cylinder.rotation.z	 = 40 * Math.PI/180;	
		scene.add( cylinder );

		// third feather
		sphere = new THREE.Mesh(
		new THREE.SphereGeometry( ball_radius, 12, 12 ), sphereMaterial );


		sphere.position.x = -53;	
		sphere.position.y = 556 + crown_height - 4 - 32;	
		sphere.position.z = 0;	
		scene.add( sphere );

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( ball_radius/3, ball_radius/4, crown_height + 7, 32, 10), cylinderMaterial);
			
		
		cylinder.position.x = -25;	
		cylinder.position.y = 556 + crown_height/2 - 32;	
		cylinder.position.z = 0;	

		cylinder.rotation.z	 = 50 * Math.PI/180;	
		scene.add( cylinder );

	  }

      // Head of the bird - head
      function createHead()
	  {
	      var head_radius = 56;
		  // head
		  var sphereMaterial = new THREE.MeshPhongMaterial( { ambient: 0x0276FD, color: 0x0276FD, specular: 0x555555, shininess: 120 } );

		  var sphere;
		  sphere = new THREE.Mesh(
		  new THREE.SphereGeometry( head_radius, 32, 16 ), sphereMaterial );

		  sphere.position.x = 0;	
		  sphere.position.y = 500;	
		  sphere.position.z = 0;	
		  scene.add( sphere );


		
  		  var eyeMaterial = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0xFFFFFF, specular: 0x555555, shininess: 120 } );
		  var kajalMaterial = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x000000, specular: 0x555555, shininess: 120 } );

		  var sphere, cylinder;
		  var sphere, cylinder;
	      var d = 2.7;
          // eye1
		  // cornea
		  sphere = new THREE.Mesh(
		  new THREE.SphereGeometry( 18, 32, 16 ), eyeMaterial); 
		  sphere.position.x = head_radius - 25;	
		  sphere.position.y = 500 + head_radius/d;	
		  sphere.position.z = -head_radius/d;	
		  scene.add( sphere );

		  // ball
		  sphere = new THREE.Mesh(
		  new THREE.SphereGeometry( 9, 32, 16 ), kajalMaterial); 
		  sphere.position.x = head_radius - 12;	
		  sphere.position.y = 500 + head_radius/d + 2	;	
		  sphere.position.z = -head_radius/d - 5;	
		  scene.add( sphere );

		  cylinder = new THREE.Mesh(
		  new THREE.CylinderGeometry( 20, 20, 2, 32, 10), kajalMaterial);
		
		
		  cylinder.position.x = head_radius - 25;	
		  cylinder.position.y = 500 + head_radius/d + 1;	
		  cylinder.position.z = -head_radius/d;	

		  cylinder.rotation.z = 90 * Math.PI/180;	
		  scene.add( cylinder );

		  // eye2
		  // cornea
		  sphere = new THREE.Mesh(
		  new THREE.SphereGeometry( 18, 32, 16 ), eyeMaterial); 
		  sphere.position.x = head_radius - 25;	
		  sphere.position.y = 500 + head_radius/d ;	
		  sphere.position.z = head_radius/d;	
		  scene.add( sphere );

		  // ball
		  sphere = new THREE.Mesh(
		  new THREE.SphereGeometry( 9, 32, 16 ), kajalMaterial); 
		  sphere.position.x = head_radius - 12;	
		  sphere.position.y = 500 + head_radius/d + 2;	
		  sphere.position.z = head_radius/d + 5;	
		  scene.add( sphere );

		  cylinder = new THREE.Mesh(
		  new THREE.CylinderGeometry( 20, 20, 2, 32, 10), kajalMaterial);
		
		
		  cylinder.position.x = head_radius - 25;	
		  cylinder.position.y = 500 + head_radius/d + 1;	
		  cylinder.position.z = head_radius/d;	

		  cylinder.rotation.z = 90 * Math.PI/180;	
		  scene.add( cylinder );



		  // eyelashes
		  cylinder = new THREE.Mesh(
		  new THREE.CylinderGeometry( 20, 20, 2, 32, 10), kajalMaterial);
		
		
		  cylinder.position.x = head_radius - 25;	
		  cylinder.position.y = 500 + head_radius/d - 6;	
		  cylinder.position.z = head_radius/d;	

		  //cylinder.rotation.z = 90 * Math.PI/180;	
		  scene.add( cylinder );


		   cylinder = new THREE.Mesh(
		  new THREE.CylinderGeometry( 20, 20, 2, 32, 10), kajalMaterial);
		
		
		  cylinder.position.x = head_radius - 25;	
		  cylinder.position.y = 500 + head_radius/d - 6;	
		  cylinder.position.z = -head_radius/d;	

		  //cylinder.rotation.z = 90 * Math.PI/180;	
		  scene.add( cylinder );
      }

	  function createNeck()
	  {
		var cylinder;
		var neck_radius = 28, neckHeight = 80;
		var neckMaterial =	 new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0276FD, specular: 0x555555, shininess: 120 } );
		var red = new THREE.MeshPhongMaterial( {ambient: 0x050505,opacity: 0.8,  color: 0xFF0000, specular: 0x555555, shininess: 120} );

		var gold =	 new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0xFFD700, specular: 0x555555, shininess: 120 } );
			
		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( neck_radius, neck_radius - 7, neckHeight, 32, 10), neckMaterial );
		
		
		cylinder.position.x = 0;	
		cylinder.position.y = 500 - neckHeight/2;	
		cylinder.position.z = 0;	
		scene.add( cylinder );


		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( neck_radius - 7, neck_radius - 7 , neckHeight, 32, 10), neckMaterial );
		cylinder.position.x = 0;	
		cylinder.position.y = 500 - neckHeight;	
		cylinder.position.z = 0;	
		scene.add( cylinder );

		
		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( neck_radius - 7, neck_radius, neckHeight, 32, 10), neckMaterial );
		cylinder.position.x = 0;	
		cylinder.position.y = 500 - neckHeight * 2;	
		cylinder.position.z = 0;	
		scene.add( cylinder );


		// necklace
		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( neck_radius + 3, neck_radius + 3, 5, 32, 10), gold );
		
		
		cylinder.position.x = 0;	
		cylinder.position.y = 470 - neckHeight/2;	
		cylinder.position.z = 0;	
		cylinder.rotation.z = -20 * Math.PI/180;
		scene.add( cylinder );

		
		  sphere = new THREE.Mesh(
		  new THREE.SphereGeometry( 7, 20, 60), red );
		

		  sphere.position.x = 27;	
		  sphere.position.y =  460 - neckHeight/2;	
		  sphere.position.z = 0;	
		  sphere.rotation.z = 360 *	Math.PI/180;
		  sphere.rotation.z = -20 * Math.PI/180;
		  sphere.scale.y = 1.1;
		  sphere.scale.x = 0.5;
		  scene.add( sphere );


			
	  }

	  function createBeak()
	  {
	    var head_radius = 56;
		var d = 2.7;
		var beakMaterial = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0xFF4500, specular: 0x555555, shininess: 120 } );
		var beakMaterial_dark = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0xCD3700, specular: 0x555555, shininess: 120 } );
		
		var cylinder;

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( 16, 1,  60, 32, 10), beakMaterial );
		
		
		cylinder.position.x = head_radius + 5;	
		cylinder.position.y = 500 + head_radius/d - 20;	
		cylinder.position.z = head_radius/d - 20;	

		cylinder.scale.z = 1.6;

		cylinder.rotation.z = 70 * Math.PI/180;	
		scene.add( cylinder );


			
		var cylinder;

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( 10, 1,  46	, 32, 10), beakMaterial_dark );
		
		
		cylinder.position.x = head_radius + 5;	
		cylinder.position.y = 500 + head_radius/d - 30;	
		cylinder.position.z = head_radius/d - 20;	

		cylinder.scale.z = 2;

		cylinder.rotation.z = 90 * Math.PI/180;	
		scene.add( cylinder );
	  }

	  function createBody()
	  {
	      var sphere, cylinder;
		  var radius = 76;
		  var phiStart = Math.PI/2, phiLength = Math.PI*2, thetaStart = 0, thetaLength = 0;
		  var bodyMaterial = new THREE.MeshPhongMaterial( { ambient: 0x8B008B, opacity: 0.5, transparent: true, color: 0x8B008B, specular: 0x555555, shininess: 200 } );

		  bodyMaterial.side = THREE.SingleSide;	
		  //bodyMaterial.depthTest = false;
		  var water =new THREE.MeshPhongMaterial( { ambient: 0xFF3300, opacity: 1,color: 0xFF3300, specular: 0x555555, shininess: 100 } ); 
		  water.side = THREE.DoubleSide;

		  sphere = new THREE.Mesh(
		  new THREE.SphereGeometry( radius, 60, 60,phiStart,phiLength, thetaStart, thetaLength ), bodyMaterial );
		
		  var paintMaterial = new THREE.MeshPhongMaterial( {ambient: 0x050505,opacity: 1,  color: 0x8B008B, specular: 0x555555, shininess: 120} );
		  paintMaterial.side = THREE.SingleSide;

				  
		  thetaLength = Math.PI/2;

		  sphere = new THREE.Mesh(
		  new THREE.SphereGeometry( radius, 60, 60,phiStart,phiLength, thetaStart, thetaLength), paintMaterial );
		

		  sphere.position.x = -40;	
		  sphere.position.y = 250;	
		  sphere.position.z = 0;	
		  sphere.rotation.z = 360 *	Math.PI/180;
		  sphere.scale.x = 1.3;
		  sphere.scale.y = 1;
		  sphere.scale.z = 1;
		  scene.add( sphere );

		  
		  
		  		
		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius, radius-20,  70, 60, 60), bodyMaterial );
		
		
		cylinder.position.x = -40;	
		cylinder.position.y = 215;	
		cylinder.position.z = 0;
		cylinder.scale.x = 1.3;
		scene.add( cylinder );


		 		
		// closing up the body
		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius, radius,  3, 60, 60), paintMaterial );
		
		
		cylinder.position.x = -40;	
		cylinder.position.y = 250;	
		cylinder.position.z = 0;
		cylinder.scale.x = 1.3;
		scene.add( cylinder );

		
		  
		  
		//fluid in drinking bird.

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius - 11, radius-20,  30, 60, 60), water );
		
		
		cylinder.position.x = -40;	
		cylinder.position.y = 198;	
		cylinder.position.z = 0;
		cylinder.scale.x = 1.3;
		scene.add( cylinder );

	  }

	  function createBack()
	  {
	    //var tail = new THREE.MeshPhongMaterial( {ambient: 0x050505,opacity: 1,  color: 0x8B008B, specular: 0x555555, shininess: 120} );
		var tail = new THREE.MeshPhongMaterial( {ambient: 0x050505,opacity: 1,  color: 0xFF4500, specular: 0x555555, shininess: 120} );

	    var radius = 20;
  	    cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius - 8, 2,  120, 60, 60), tail );		
		cylinder.position.x = -170;	
		cylinder.position.y = 290;	
		cylinder.position.z = 25;
		cylinder.scale.x = 1.3;
		cylinder.scale.z = 0.3;
		scene.add( cylinder );
		cylinder.rotation.z = 45;
		cylinder.rotation.y = 20 * Math.PI/180;

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius - 8, 2,  120, 60, 60), tail );		
		cylinder.position.x = -170;	
		cylinder.position.y = 290;	
		cylinder.position.z = 12;
		cylinder.scale.x = 1.3;
		cylinder.scale.z = 0.3;
		cylinder.rotation.z = 45;
		cylinder.rotation.y = 10 * Math.PI/180;
		scene.add( cylinder );


		
		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius - 8, 2,  120, 60, 60), tail );		
		cylinder.position.x = -170;	
		cylinder.position.y = 290;	
		cylinder.position.z = -12;
		cylinder.scale.x = 1.3;
		cylinder.scale.z = 0.3;
		cylinder.rotation.z = 45;
		cylinder.rotation.y = -10 * Math.PI/180;
		scene.add( cylinder );

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius - 8, 2,  120, 60, 60), tail );		
		cylinder.position.x = -170;	
		cylinder.position.y = 290;	
		cylinder.position.z = 0;
		cylinder.scale.x = 1.3;
		cylinder.scale.z = 0.3;		
		cylinder.rotation.z = 45;	
		scene.add( cylinder );


		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius - 8, 2,  120, 60, 60), tail );		
		cylinder.position.x = -170;	
		cylinder.position.y = 290;	
		cylinder.position.z = -25;
		cylinder.scale.x = 1.3;
		cylinder.scale.z = 0.3;
		
		cylinder.rotation.z = 45;
	
		scene.add( cylinder );
		cylinder.rotation.y = -20 * Math.PI/180;
  }

	  function createTail(circle_x, circle_y, circle_z, angle)
	  {   
		   var radius = 17;
		   circle_y = circle_y + 80;  
		   
		   var water = new THREE.MeshNormalMaterial( { color: 0x000000});
		   water.side = THREE.DoubleSide;
		   
		  var paintMaterial = new THREE.MeshPhongMaterial( {ambient: 0x050505,opacity: 1,  color: 0x4B0082, specular: 0x555555, shininess: 120} );
		  paintMaterial.side = THREE.SingleSide;

		   var borderMaterialOrange = new THREE.MeshPhongMaterial( {ambient: 0x050505,opacity: 0.8,  color: 0xFF4500, specular: 0x555555, shininess: 120} );


		   var borderMaterialGreen = new THREE.MeshPhongMaterial( {ambient: 0x050505,opacity: 1,  color: 0x006400, specular: 0x555555, shininess: 120} );
	
			var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( radius , radius,  2, 32, 32), water);
		
		
			cylinder.position.x = -40 + circle_x;	
			cylinder.position.y = 218 + circle_y;	
			cylinder.position.z = circle_z;
			cylinder.scale.z = 1.4;
			cylinder.rotation.x = (90+angle)  * Math.PI/180;
			cylinder.rotation.z = 90 * Math.PI/180;
			cylinder.rotation.y = 10 * Math.PI/180;
			
			scene.add( cylinder );

			
			var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( radius , radius,  2, 32, 32), borderMaterialOrange	);


			cylinder.position.x = -42 + circle_x;	
			cylinder.position.y = 222 + circle_y;	
			cylinder.position.z =  circle_z;
			cylinder.scale.x = 1.3;
			cylinder.scale.z = 1.3;
			cylinder.scale.z = 1.7;
			cylinder.rotation.x = (90+angle)  * Math.PI/180;
			cylinder.rotation.z = 90 * Math.PI/180;
			cylinder.rotation.y = 10 * Math.PI/180;
			scene.add( cylinder );


				
			var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( radius , radius,  2, 32, 32), borderMaterialGreen);


			cylinder.position.x = -45 + circle_x;	
			cylinder.position.y = 222 + circle_y;	
			cylinder.position.z = circle_z;
			cylinder.scale.x = 1.5;
			cylinder.scale.z = 1.5;
			cylinder.scale.z = 1.9;
			cylinder.rotation.x = (90+angle)  * Math.PI/180;
			cylinder.rotation.z = 90 * Math.PI/180;
			cylinder.rotation.y = 10 * Math.PI/180;
			scene.add( cylinder );

			var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( radius , radius,  2, 32, 32), paintMaterial);
		

			cylinder.position.x = -38 + circle_x;	
			cylinder.position.y = 220 + circle_y;	
			cylinder.position.z =  circle_z;
		
					
			cylinder.scale.x = 0.8;
			cylinder.scale.y = 0.8;
			cylinder.scale.z = 0.8;		

			cylinder.rotation.x = (90+angle)  * Math.PI/180;
			cylinder.rotation.z = 90 * Math.PI/180;
			cylinder.rotation.y = 10 * Math.PI/180;
			scene.add( cylinder );

			var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( radius , radius,  20, 32, 32), water);
		

			cylinder.position.x = -38.3 + circle_x;	
			cylinder.position.y = 210 + circle_y;	
			cylinder.position.z =  circle_z;
		
					
			cylinder.scale.x = 0.3;
			cylinder.scale.y = 0.3;
			cylinder.scale.z = 0.3;		

			cylinder.rotation.x = (90+angle) * Math.PI/180;
			cylinder.rotation.z = 90 * Math.PI/180;
			cylinder.rotation.y = 10 * Math.PI/180;
			scene.add( cylinder );
	  }
	  function stem() 
	  {
	  		var radius = 190;
		    var borderMaterialGreen = new THREE.MeshPhongMaterial( {ambient: 0x050505,opacity: 1,  color: 0x006400, specular: 0x555555, shininess: 120} );
	  	

			// largest round
		    for(var angle = -90; angle <= 90; angle = angle + 10)
			{			
				radius = 190;	
				var cosTheta = 	Math.cos(angle * Math.PI/180);
				var sinTheta = Math.sin(angle * Math.PI/180);

				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  1200, 32, 32), borderMaterialGreen);								
				cylinder.position.x = -103;	
				cylinder.position.y = 300 + radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				createTail(-63, (radius+200)  * cosTheta, (radius+200) * sinTheta, angle);
				cylinder.rotation.x = angle * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;
				cylinder.rotation.y = 10 * Math.PI/180;					
				scene.add( cylinder );

				
				var radius = 420;
				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  130, 32, 32), borderMaterialGreen);
				cylinder.position.x = -112;	
				cylinder.position.y = 300 + radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				cylinder.rotation.x = (angle-40) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;
				cylinder.rotation.y = 10 * Math.PI/180;					
				scene.add( cylinder );

				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  130, 32, 32), borderMaterialGreen);
				cylinder.position.x = -112;	
				cylinder.position.y = 300 + radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				cylinder.rotation.x = (angle) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;			
				cylinder.rotation.y = 10 * Math.PI/180;		
				scene.add( cylinder );

							
				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  130, 32, 32), borderMaterialGreen);
				cylinder.position.x = -112;	
				cylinder.position.y = 300 + radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				cylinder.rotation.x = (angle+40) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;	
				cylinder.rotation.y = 10 * Math.PI/180;				
				scene.add( cylinder );			
				

			}
			
			// middle round
		
			for(var angle = -95; angle <= 100; angle = angle + 12)
			{
				var cosTheta = 	Math.cos(angle * Math.PI/180);
				var sinTheta = Math.sin(angle * Math.PI/180);
				radius = 130;
				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  1000, 32, 32), borderMaterialGreen);								
				cylinder.position.x = -90;	
				cylinder.position.y = 300 + radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				createTail(-50, (190 + 100)  * cosTheta, (190 +100 ) * sinTheta, angle);
				cylinder.rotation.x = (angle) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;					
				scene.add( cylinder );

				
				var radius = 320;
				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  130, 32, 32), borderMaterialGreen);
				cylinder.position.x = -99;	
				cylinder.position.y = 300 +	radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				cylinder.rotation.x = (angle-40) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;					
				scene.add( cylinder );

				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  130, 32, 32), borderMaterialGreen);
				cylinder.position.x = -99;	
				cylinder.position.y = 300 +	radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				cylinder.rotation.x = (angle) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;					
				scene.add( cylinder );

							
				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  130, 32, 32), borderMaterialGreen);
				cylinder.position.x = -99;	
				cylinder.position.y = 300 + radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				cylinder.rotation.x = (angle+40) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;					
				scene.add( cylinder );
		   }

		   
			// first smallest round
			
			for(var angle = -100; angle <= 100; angle = angle + 22)
			{
				var cosTheta = 	Math.cos(angle * Math.PI/180);
				var sinTheta = Math.sin(angle * Math.PI/180);
				radius = 70;
				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  500, 32, 32), borderMaterialGreen);								
				cylinder.position.x = -77;	
				cylinder.position.y = 300 + radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				createTail(-37, (160 )  * cosTheta, (160  ) * sinTheta, angle);
				cylinder.rotation.x = (angle) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;					
				scene.add( cylinder );

							
				var radius = 190;
				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  130, 32, 32), borderMaterialGreen);
				cylinder.position.x = -86;	
				cylinder.position.y = 300 +	radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				cylinder.rotation.x = (angle-40) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;					
				scene.add( cylinder );

				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  130, 32, 32), borderMaterialGreen);
				cylinder.position.x = -86;	
				cylinder.position.y = 300 +	radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				cylinder.rotation.x = (angle) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;					
				scene.add( cylinder );

							
				var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3 , 3,  130, 32, 32), borderMaterialGreen);
				cylinder.position.x = -86;	
				cylinder.position.y = 300 + radius * cosTheta;	
				cylinder.position.z = radius * sinTheta;
				cylinder.rotation.x = (angle+40) * Math.PI/180;
				cylinder.scale.x = 0.3;
				cylinder.scale.y = 0.3;
				cylinder.scale.z = 0.3;					
				scene.add( cylinder );
		   }
		  
	  }

	  function createStand()
	  {
	  	  		
		var radius = 6;
		var gap = 100;
		var x_pos = -50;
		var phiStart = Math.PI/2, phiLength = Math.PI*2, thetaStart = 0, thetaLength = Math.PI/2;
		var standMaterial = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0276FD, specular: 0x555555, shininess: 120 } );
		var sockMaterial = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0xFF4500, specular: 0x555555, shininess: 120 } );
		var paintMaterial = new THREE.MeshPhongMaterial( {ambient: 0x8B008B,opacity: 1,  color: 0x8B008B, specular: 0x555555, shininess: 120} );

		standMaterial.side = THREE.DoubleSide;

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius, radius,  240, 60, 60), standMaterial );
		
		
		cylinder.position.x = x_pos;	
		cylinder.position.y = 270;	
		cylinder.position.z = 0;
		cylinder.rotation.x = 90 * Math.PI/180;
		scene.add( cylinder );



		
		var sphere = new THREE.Mesh(
		new THREE.SphereGeometry( 12, 64, 16,phiStart, phiLength, thetaStart, thetaLength ), standMaterial, 0,0,0,90);
		
		sphere.position.x = x_pos;	
		sphere.position.y = 290;	
		sphere.position.z = gap - 10;	
		scene.add( sphere );


		var sphere = new THREE.Mesh(
		new THREE.SphereGeometry( 12, 64, 16,phiStart, phiLength, thetaStart, thetaLength), standMaterial, 0,0,0,90);
		
		sphere.position.x = x_pos;	
		sphere.position.y = 290;	
		sphere.position.z = -gap + 10;	
		scene.add( sphere );



		var sphere = new THREE.Mesh(
		new THREE.SphereGeometry( 12, 64, 16,phiStart, phiLength, thetaStart, thetaLength ), standMaterial, 0,0,0,90);
		
		sphere.position.x = x_pos;	
		sphere.position.y = 270;	
		sphere.position.z = gap + 10;	
		sphere.rotation.x = 90 * Math.PI/180;
		scene.add( sphere );


		var sphere = new THREE.Mesh(
		new THREE.SphereGeometry( 12, 64, 16,phiStart, phiLength, thetaStart, thetaLength), standMaterial, 0,0,0,90);
		
		sphere.position.x = x_pos;	
		sphere.position.y = 270;	
		sphere.position.z = -gap - 10;	
		sphere.rotation.x = -90 * Math.PI/180;
		scene.add( sphere );


		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius+5, radius,  290, 60, 60), standMaterial );
		
		
		cylinder.position.x = x_pos;	
		cylinder.position.y = 146;	
		cylinder.position.z = gap - 10;
		scene.add( cylinder );

		
		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius+5, radius,  290, 60, 60), standMaterial );
		
		
		cylinder.position.x = x_pos;	
		cylinder.position.y = 146;	
		cylinder.position.z = -gap + 10;
		scene.add( cylinder );


				
		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius + 35, radius + 35,  30, 60, 60), paintMaterial );		
		cylinder.position.x = x_pos + 15;	
		cylinder.position.y = 15;	
		cylinder.position.z = -gap + 10;
		cylinder.scale.x = 1.3;
		scene.add( cylinder );

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius + 20, radius + 20,  20, 60, 60), sockMaterial );		
		cylinder.position.x = x_pos;	
		cylinder.position.y = 40;	
		cylinder.position.z = -gap + 10;
		scene.add( cylinder );


		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius + 35, radius + 35,  30, 60, 60), paintMaterial );		
		cylinder.position.x = x_pos + 15;	
		cylinder.position.y = 15;	
		cylinder.position.z = gap - 10;
		cylinder.scale.x = 1.3;
		scene.add( cylinder );

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( radius + 20, radius + 20,  20, 60, 60), sockMaterial );		
		cylinder.position.x = x_pos;	
		cylinder.position.y = 40;	
		cylinder.position.z = gap -10;
		scene.add( cylinder );

	 }

      function createDrinkingBird() 
	  {
          createHead();
		  createCrown();
		  createNeck();
		  stem();
		  createBeak();		
		  createBody();
		  createBack();
		  createStand();
      }

	  function createPot()
	  {
		var pot_radius = 80, neck_radius = 30, neckHeight = 40;
		var phiStart = Math.PI/2, phiLength = Math.PI*2, thetaStart = 0, thetaLength = Math.PI;
	    var sphere;
	    //var potMaterial = new THREE.MeshLambertMaterial();
		var potMaterial  = new THREE.MeshPhongMaterial({ ambient: 0x964514, color: 0x964514	, specular: 0x555555, shininess: 20 });
		var waterMaterial = new THREE.MeshPhongMaterial({ ambient: 0x050505, color: 0x0198E1, specular: 0x555555, shininess: 120 });

		//potMaterial.color.setRGB(0.79, 0.4, 0.27);
		waterMaterial.side = THREE.DoubleSide;
		potMaterial.side = THREE.DoubleSide;

		// the pot body
		sphere = new THREE.Mesh(
		new THREE.SphereGeometry( pot_radius, 64, 16 ), potMaterial, 0,0,0,90);
		

		sphere.position.x = 300;	
		sphere.position.y = pot_radius;	
		sphere.position.z = 0;	
		scene.add( sphere );

		// the pot neck
		var cylinder;
		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( neck_radius, neck_radius - 7, neckHeight, 32, 10, 1 ), potMaterial );
		
		
		cylinder.position.x = 300;	
		cylinder.position.y = pot_radius * 2 + neckHeight/2	- 10;	
		cylinder.position.z = 0;	
		scene.add( cylinder );

		cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( neck_radius - 5, neck_radius - 7, neckHeight/2, 32, 10, 0 ), waterMaterial );
		
		
		cylinder.position.x = 300;		
		cylinder.position.y = pot_radius * 2 + neckHeight/2	- 10;	
		cylinder.position.z = 0;	
		scene.add( cylinder );

	  }

      function fillScene() {
      // SCENE
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog( 0x808080, 3000, 6000 );
      // LIGHTS
      var ambientLight = new THREE.AmbientLight( 0x222222 );
      var light = new THREE.DirectionalLight( 0xffffff, 1.0 );
      light.position.set( 200, 200, 200 );

      var light2 = new THREE.DirectionalLight( 0xffffff, 1.0 );
      light2.position.set(200,200,-200);

	  var light3 = new THREE.DirectionalLight( 0xffffff, 1.0 );
      light3.position.set(-200,200,0);


      scene.add(ambientLight);
      scene.add(light);
      scene.add(light2);
	  scene.add(light3);

      scene.add(camera);

      if (ground) {
      Coordinates.drawGround({size:1000, color: 0x00611C});
      }
    
      createDrinkingBird();
	  createPot();
      }

      //
      function addToDOM() {
      var container = document.getElementById('container');
      var canvas = container.getElementsByTagName('canvas');
      if (canvas.length>0) {
      container.removeChild(canvas[0]);
      }
      container.appendChild( renderer.domElement );
      }

      function animate() {
      window.requestAnimationFrame(animate);
      render();
      }

      function render() {
      var delta = clock.getDelta();
      cameraControls.update(delta);

      renderer.render(scene, camera);
      }

      function setupGui() {

      effectController = {

      newGround: ground,
 
      dummy: function() {
      }
      };

      }