import { useState, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";

// Mapbox token
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiMGgwMXEiLCJhIjoiY21naDg1MjloMDJ0ejJtcjV5M3Z0bzQ0dyJ9.H9-Kwj-OcFxVqXW2QQdjng";

interface GpsData {
  location: string;
  lat: number;
  lng: number;
}

export function FootPrintsPage() {
  const [gpsArray, setGpsArray] = useState<GpsData[]>([]);
  const [isDataReady, setIsDataReady] = useState(false);

  const INITIAL_VIEW_STATE = {
    longitude: -97.0929,
    latitude: 35.0078,
    zoom: 3.5,
    pitch: 0,
    bearing: 0,
  };

  useEffect(() => {
    // Fetch GPS data from backend
    axios
      .get("http://localhost:3000/decorate/getGpsFromAllImages")
      .then((response) => {
        const transformedData = response.data.map((item: any) => ({
          location: item[0] || "Unknown",
          lat: item[1] || 0,
          lng: item[2] || 0,
        }));
        setGpsArray(transformedData);
        setIsDataReady(true);
      })
      .catch((error) => {
        console.error("Error fetching GPS data:", error);
        // Use sample data for demo purposes
        setGpsArray([
          { location: "Los Angeles", lat: 34.0522, lng: -118.2437 },
          { location: "Seattle", lat: 47.6062, lng: -122.3321 },
          { location: "New York", lat: 40.7128, lng: -74.006 },
          { location: "Chicago", lat: 41.8781, lng: -87.6298 },
          { location: "Miami", lat: 25.7617, lng: -80.1918 },
          { location: "Denver", lat: 39.7392, lng: -104.9903 },
          { location: "Boston", lat: 42.3601, lng: -71.0589 },
          { location: "Austin", lat: 30.2672, lng: -97.7431 },
        ]);
        setIsDataReady(true);
      });
  }, []);

  // Create a heart-shaped marker layer with better visibility
  const layers = [
    new ScatterplotLayer({
      id: "scatterplot-layer",
      data: gpsArray,
      pickable: true,
      opacity: 0.9,
      stroked: true,
      filled: true,
      radiusScale: 8,
      radiusMinPixels: 20,
      radiusMaxPixels: 80,
      lineWidthMinPixels: 3,
      getPosition: (d: GpsData) => [d.lng, d.lat],
      getRadius: () => 100,
      getFillColor: [233, 30, 99, 220], // Pink color with better opacity
      getLineColor: [255, 255, 255, 255], // White border
    }),
  ];

  return (
    <>
      <style>{`
        .mapboxgl-map {
          font-family: 'Open Sans', sans-serif;
        }
        .mapboxgl-ctrl-logo,
        .mapboxgl-ctrl-attrib {
          opacity: 0.5;
        }
      `}</style>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(180deg, #ffffff 0%, #fce7f3 100%)",
          padding: "4rem 0",
        }}
      >
        {/* Title section */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem 3rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1rem",
            }}
          >
            我们的足迹
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#4b5563",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            我们的足迹遍布大江南北，世界各个角落，目标环游世界！每个地方都有我们的脚印👣
          </p>
        </div>

        {/* Map container */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <div
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
              border: "4px solid white",
            }}
          >
            {isDataReady ? (
              <div style={{ width: "100%", height: "600px", position: "relative" }}>
                <DeckGL
                  initialViewState={INITIAL_VIEW_STATE}
                  controller={true}
                  layers={layers}
                  style={{ position: "relative", width: "100%", height: "100%" }}
                  getTooltip={({ object }: any) =>
                    object && {
                      html: `
                        <div style="
                          background: white;
                          padding: 12px 16px;
                          border-radius: 8px;
                          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                          border: 2px solid #e91e63;
                        ">
                          <div style="
                            font-size: 16px;
                            font-weight: bold;
                            color: #e91e63;
                            margin-bottom: 4px;
                          ">
                            📍 ${object.location}
                          </div>
                          <div style="font-size: 13px; color: #666;">
                            ${Math.abs(object.lat).toFixed(4)}°${object.lat >= 0 ? "N" : "S"},
                            ${Math.abs(object.lng).toFixed(4)}°${object.lng >= 0 ? "E" : "W"}
                          </div>
                        </div>
                      `,
                      style: {
                        backgroundColor: "transparent",
                        fontSize: "0.9em",
                      },
                    }
                  }
                >
                  <Map
                    reuseMaps
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    mapStyle="mapbox://styles/mapbox/streets-v12"
                    style={{ position: "absolute", width: "100%", height: "100%" }}
                  />
                </DeckGL>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "600px",
                  background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    color: "#e91e63",
                    marginBottom: "1rem",
                    animation: "pulse 1.5s infinite",
                  }}
                >
                  ♥
                </div>
                <p
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#e91e63",
                  }}
                >
                  加载地图数据中...
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginTop: "3rem",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "2rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: "bold",
                  color: "#e91e63",
                  marginBottom: "0.5rem",
                }}
              >
                {gpsArray.length}
              </div>
              <div style={{ color: "#4b5563", fontSize: "1.125rem" }}>地点数量</div>
            </div>
            <div
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "2rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  marginBottom: "0.5rem",
                }}
              >
                🌍
              </div>
              <div style={{ color: "#4b5563", fontSize: "1.125rem" }}>环游世界</div>
            </div>
            <div
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "2rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  marginBottom: "0.5rem",
                }}
              >
                💕
              </div>
              <div style={{ color: "#4b5563", fontSize: "1.125rem" }}>美好回忆</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
