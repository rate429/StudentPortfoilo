import Image from "next/image";
import React from "react";
import pfp from "../../../../public/pfp.jpg"
import "./css/index.css"
export default function ProfileSection() {
    return (
        <React.Fragment>
        <section className="ProfileSection" id="profileid">
            <h2>Riley Rager</h2>
            <Image className="pfp-image" src={pfp} height={125} width={125} alt="Riley Rager"></Image>
        </section>
        </React.Fragment>
    )
}