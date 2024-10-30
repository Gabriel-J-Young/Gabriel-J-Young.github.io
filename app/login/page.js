import * as THREE from "../../potree/libs/three.js/build/three.module.js";

export default function Page() {
        
		window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));
		
		viewer.setEDLEnabled(true);
		viewer.setFOV(60);
		viewer.setPointBudget(1_000_000);
		viewer.loadSettingsFromURL();
		
		viewer.setDescription("Loading LAZ compressed octree format");
		
		viewer.loadGUI(() => {
			viewer.setLanguage('en');
			$("#menu_appearance").next().show();
			//viewer.toggleSidebar();
		});
		
		Potree.loadPointCloud("../pointclouds/data_converted/small_sample_with_attributes_1.las_converted/metadata.json", "lion", function(e){
			viewer.scene.addPointCloud(e.pointcloud);
			
			let material = e.pointcloud.material;
			material.size = 1;
			material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
			
			e.pointcloud.position.x += 3;
			e.pointcloud.position.y -= 3;
			e.pointcloud.position.z += 4;
			
			viewer.fitToScreen();
		});
    return <div>

<head>
	<meta charset="utf-8"></meta>
	<meta name="description" content=""></meta>
	<meta name="author" content=""></meta>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
	<title>Potree Viewer</title>

	<link rel="stylesheet" type="text/css" href="../build/potree/potree.css"></link>
	<link rel="stylesheet" type="text/css" href="../libs/jquery-ui/jquery-ui.min.css"></link>
	<link rel="stylesheet" type="text/css" href="../libs/openlayers3/ol.css"></link>
	<link rel="stylesheet" type="text/css" href="../libs/spectrum/spectrum.css"></link>
	<link rel="stylesheet" type="text/css" href="../libs/jstree/themes/mixed/style.css"></link>
</head>

<body>
	<script src="../libs/jquery/jquery-3.1.1.min.js"></script>
	<script src="../libs/spectrum/spectrum.js"></script>
	<script src="../libs/jquery-ui/jquery-ui.min.js"></script>
	
	
	<script src="../libs/other/BinaryHeap.js"></script>
	<script src="../libs/tween/tween.min.js"></script>
	<script src="../libs/d3/d3.js"></script>
	<script src="../libs/proj4/proj4.js"></script>
	<script src="../libs/openlayers3/ol.js"></script>
	<script src="../libs/i18next/i18next.js"></script>
	<script src="../libs/jstree/jstree.js"></script>
	<script src="../build/potree/potree.js"></script>
	<script src="../libs/plasio/js/laslaz.js"></script>
	
	{/* <!-- INCLUDE ADDITIONAL DEPENDENCIES HERE -->
	<!-- INCLUDE SETTINGS HERE --> */}
	
	<div class="potree_container" style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; ">
		<div id="potree_render_area" style="background-image: url('../build/potree/resources/images/background.jpg');"></div>
		<div id="potree_sidebar_container"> </div>
	</div>
	
	
  </body>
        
    </div>

}