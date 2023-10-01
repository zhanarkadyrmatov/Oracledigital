import React, { useState, useEffect } from "react";
import "./accordion.css";
import { useAnimate, motion, LayoutGroup } from "framer-motion";
import { duration } from "@mui/material";
import { Collapse } from "react-collapse";

const items = [
  {
    id: 1,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 2,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 3,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 4,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 5,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
];

function Accordion() {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  return (
    <div id="accordion">
      <div className="accordion_container">
        <div className="accordion">
          <h2>Часто задаваемые вопросы</h2>
          <p className="accordion_text">
            Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor
            ipsum sem. Neque porta morbi ullamcorper blandit libero quam ligula
            ut aenean.
          </p>
          <div className="accordion_wrapper">
            {items.map((item) => (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="accordion_card"
                key={item.id}
              >
                <div
                  style={{
                    backgroundColor:
                      openItemId === item.id ? "#F0F0F0" : "#fff",
                  }}
                  className="accordion_button"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <p>{item.title}</p>
                  <p>{openItemId === item.id ? "-" : "+"}</p>
                </div>
                <Collapse isOpened={openItemId == item.id}>
                  <p className="accor_text">{item.content}</p>
                </Collapse>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
