import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container_feature">
      <div className="box c1">
        <div className="cnt_data">
          <div className="title_feat">Intuitiva</div>{" "}
          <div className="desc">
            <li>
              Diseño simple que facilita su uso y comprensión para el usuario
              desde el primer momento.
            </li>
          </div>
        </div>
        <img src="/intuitivo.png" height={500} />
      </div>
      <div className="box c2">
        <img src="/teoria.png" height={700} />

        <div className="cnt_data">
          <div className="title_feat">Calidad de contenido</div>{" "}
          <div className="desc">
            <li>
              El contenido teórico presente se caracteriza por su sencillez,
              utilidad y precisión.
            </li>
          </div>
        </div>
      </div>
      <div className="box c3">
        <div className="cnt_data">
          <div className="title_feat">Interactiva</div>{" "}
          <div className="desc">
            <li>
              El usuario es incentivado a tomar acción y aplicar sus conocimientos adquiridos luego de cada aprendizaje. 
            </li>
          </div>
        </div>
        <img src="/interactivo.png" height={500} />
      </div>
    </div>
  );
}
