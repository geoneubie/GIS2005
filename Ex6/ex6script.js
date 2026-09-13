function parseSourceParam() {

        const viewElement = document.querySelector("arcgis-map");

        const locString = window.location;
        console.log("locString=" + locString);
        const urlParams = new URLSearchParams(locString.search);
        let resort = urlParams.get("resort");
        console.log(resort);
        if (resort=="winterpark") {
            viewElement.goTo(
                // go to point with a custom animation duration
                { center: [-105.76, 39.89] },
                { duration: 5000 },
            );
        }
        viewElement.zoom = 15;
  
}
