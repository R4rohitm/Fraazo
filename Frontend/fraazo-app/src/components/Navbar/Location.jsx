import React, { useRef } from "react";

const Location = (props) => {
  const { setLocation, setGeocomponent } = props;
  const lat = useRef();
  const lon = useRef();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat.current = position.coords.latitude;
      lon.current = position.coords.longitude;
    });
  }
  console.log("loc", lat.current, lon.current);
  async function getLocation() {
    if ((lat.current, lon.current)) {
      let response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat.current}&longitude=${lon.current}&localityLanguage=en`
      );

      let data = await response.json();
      if (data.city) {
        setLocation(data.city);
      } else {
        setLocation("Mumbai");
      }
      setGeocomponent(false);

      console.log(data);
    }
  }

  return (
    <div class="w-full fixed top-0 left-0 bottom-0 flex z-40 ">
      <div class=" w-[30%] bg-white border  ">
        <div>
          <img
            onClick={() => setGeocomponent(false)}
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDEySDUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiAxOUw1IDEyTDEyIDUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
            alt="backarrow"
            class="absolute top-3 left-3 z-10"
          />
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=Mumbai,MH&zoom=11&size=768x285&scale=2&key=AIzaSyCmijT_PoZ6_j28v0Of37JWKu7ACqMolmY"
            alt="map"
          />
        </div>
        <div class="rounded-md">
          <div
            onClick={() => getLocation()}
            class="h-14 px-5 mt-8 font-Quicksand flex items-center gap-6 text-[15px] cursor-pointer  text-[#5DCAC7] bg-[#EFF9F7]"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMzI3NjA2IDEwLjQ4MjhIMi4wMzEwMUMyLjQ3ODY1IDEzLjg2MjIgNS4xMzc3NiAxNi41MjE0IDguNTE3MTggMTYuOTY5VjE4LjY3MjRDOC41MTc3NiAxOC44NTMyIDguNjY0MTcgMTguOTk5NCA4Ljg0NDc5IDE5SDEwLjE1NTJDMTAuMzM1OCAxOC45OTk0IDEwLjQ4MjIgMTguODUzMiAxMC40ODI4IDE4LjY3MjRWMTYuOTY5QzEzLjg2MjIgMTYuNTIxNCAxNi41MjE0IDEzLjg2MjIgMTYuOTY5IDEwLjQ4MjhIMTguNjcyNEMxOC44NTMyIDEwLjQ4MjIgMTguOTk5NCAxMC4zMzU4IDE5IDEwLjE1NTJWOC44NDQ3OUMxOC45OTk0IDguNjY0MTcgMTguODUzMiA4LjUxNzc2IDE4LjY3MjQgOC41MTcxOEgxNi45NjlDMTYuNTIxNCA1LjEzNzc2IDEzLjg2MjIgMi40Nzg2NSAxMC40ODI4IDIuMDMxMDFWMC4zMjc2MDZDMTAuNDgyMiAwLjE0Njg0MyAxMC4zMzU4IDAuMDAwNTc5ODM0IDEwLjE1NTIgMEg4Ljg0NDc5QzguNjY0MTcgMC4wMDA1Nzk4MzQgOC41MTc3NiAwLjE0Njg0MyA4LjUxNzE4IDAuMzI3NjA2VjIuMDMxMDFDNS4xMzc3NiAyLjQ3ODY1IDIuNDc4NjUgNS4xMzc3NiAyLjAzMTAxIDguNTE3MThIMC4zMjc2MDZDMC4xNDY4NDMgOC41MTc3NiAwLjAwMDU3OTgzNCA4LjY2NDE3IDAgOC44NDQ3OVYxMC4xNTUyQzAuMDAwNTc5ODM0IDEwLjMzNTggMC4xNDY4NDMgMTAuNDgyMiAwLjMyNzYwNiAxMC40ODI4Wk05LjUgMy45MzA5OEMxMi41NzU2IDMuOTMwOTggMTUuMDY5IDYuNDI0NDIgMTUuMDY5IDkuNUMxNS4wNjkgMTIuNTc1NiAxMi41NzU2IDE1LjA2OSA5LjUgMTUuMDY5QzYuNDI0NDIgMTUuMDY5IDMuOTMwOTggMTIuNTc1NiAzLjkzMDk4IDkuNUMzLjkzNTMzIDYuNDI2MTUgNi40MjYxNSAzLjkzNTMzIDkuNSAzLjkzMDk4WiIgZmlsbD0iIzVEQzZBRCIvPgo8cGF0aCBkPSJNMTIuMTIwMyA5LjUwMDFDMTIuMTIwMyAxMC45NDc1IDEwLjk0NyAxMi4xMjA4IDkuNDk5NjEgMTIuMTIwOEM4LjA1MjIgMTIuMTIwOCA2Ljg3ODkxIDEwLjk0NzUgNi44Nzg5MSA5LjUwMDFDNi44Nzg5MSA4LjA1MjY5IDguMDUyMiA2Ljg3OTM5IDkuNDk5NjEgNi44NzkzOUMxMC45NDcgNi44NzkzOSAxMi4xMjAzIDguMDUyNjkgMTIuMTIwMyA5LjUwMDFaIiBmaWxsPSIjNURDNkFEIi8+Cjwvc3ZnPgo="
              alt="location"
              class="h-5"
            />
            <p>Use My Current Location</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => setGeocomponent(false)}
        class="w-[70%] bg-transparent"
      ></div>
    </div>
  );
};

export default Location;
