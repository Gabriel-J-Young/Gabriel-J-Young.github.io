"use client";
import { useEffect } from "react";

export default function Page() {
    const meta = {
        title: 'Potree Viewer', 
        meta: {
            charset: 'utf-8',
            name: {
                description: "",
                author: "",
                viewport: "width=device-width, initial-scale=1.0, user-scalable=no"
            }
        }
    }

    const iamahook = useEffect(() => {

        window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));
                    
        viewer.setEDLEnabled(true);
        viewer.setFOV(60);
        viewer.setPointBudget(2_000_000);
        {/* <!-- INCLUDE SETTINGS HERE --> */}
        viewer.loadSettingsFromURL();
        
        viewer.setDescription("");
        
        viewer.loadGUI(() => {
            viewer.setLanguage('en');
            $("#menu_appearance").next().show();
            $("#menu_tools").next().show();
            $("#menu_clipping").next().show();
            viewer.toggleSidebar();
        });
        
        
    
        Potree.loadPointCloud("public/small_sample_with_attributes_output/pointclouds/small_sample_page/metadata.json", "small_sample_page", e => {
            let scene = viewer.scene;
            let pointcloud = e.pointcloud;
            
            let material = pointcloud.material;
            material.size = 1;
            material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
            material.shape = Potree.PointShape.SQUARE;
            material.activeAttributeName = "rgba";
            
            scene.addPointCloud(pointcloud);
            
            viewer.fitToScreen();
        });
    
    }, []);


    return (
      <div>
        <DocumentMeta {...meta} />
            <head>
                <link rel="stylesheet" type="text/css" href="public/small_sample_with_attributes_output/libs/potree/potree.css"></link>
                <link rel="stylesheet" type="text/css" href="public/small_sample_with_attributes_output/libs/jquery-ui/jquery-ui.min.css"></link>
                <link rel="stylesheet" type="text/css" href="public/small_sample_with_attributes_output/libs/openlayers3/ol.css"></link>
                <link rel="stylesheet" type="text/css" href="public/small_sample_with_attributes_output/libs/spectrum/spectrum.css"></link>
                <link rel="stylesheet" type="text/css" href="public/small_sample_with_attributes_output/libs/jstree/themes/mixed/style.css"></link>
            </head>

            <body>
                <script src="public/small_sample_with_attributes_output/libs/jquery/jquery-3.1.1.min.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/spectrum/spectrum.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/jquery-ui/jquery-ui.min.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/other/BinaryHeap.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/tween/tween.min.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/d3/d3.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/proj4/proj4.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/openlayers3/ol.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/i18next/i18next.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/jstree/jstree.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/potree/potree.js"></script>
                <script src="public/small_sample_with_attributes_output/libs/plasio/js/laslaz.js"></script>
                
                {/* <!-- INCLUDE ADDITIONAL DEPENDENCIES HERE -->
                <!-- INCLUDE SETTINGS HERE --> */}
                
                <div class="potree_container" style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; ">
                    <div id="potree_render_area" style="background-image: url('../build/potree/resources/images/background.jpg');"></div>
                    <div id="potree_sidebar_container"> </div>
                </div>
                               
                
            </body>
      </div>
    );
    }