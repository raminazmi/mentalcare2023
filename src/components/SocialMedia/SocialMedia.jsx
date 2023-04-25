import React from "react";
import {
    BsWhatsappMini,
    BsInstagramMini,
    BsTwitterMini,
    BsLinkedinMini,
    BsYoutubeMini,
    FaFacebookFMini,
} from "../../lib/@reacticons";
function SocialMedia() {
    return (
        <>
            <div className="hidden lg:block fixed top-[30%] left-0 text-xl cursor-pointer z-10">
                <ul className="text-white m-0 parent ">
                    <li className="p-2.5 rounded-tr-md bg-green-600 dd" data-name="WhatsApp">
                        <BsWhatsappMini className="hover:translate-x-1" />
                    </li>
                    <li className="p-2.5 bg-[#00ACEE] dd" data-name="Twitter">
                        <BsTwitterMini className="hover:translate-x-1" />
                    </li>
                    <li className="p-2.5 bg-[#3B5999] dd " data-name="Facebook">
                        <FaFacebookFMini className="hover:translate-x-1" />
                    </li>
                    <li className="p-2.5 bg-[#E4405F] dd" data-name="Instagram">
                        <BsInstagramMini className="hover:translate-x-1" />
                    </li>
                    <li className="p-2.5 bg-[#0077B5] dd" data-name="LinkedIn">
                        <BsLinkedinMini className="hover:translate-x-1" />
                    </li>
                    <li className="p-2.5 rounded-br-md bg-[#CD201F] dd" data-name="YouTube" >
                        <BsYoutubeMini className="hover:translate-x-1" />
                    </li>
                </ul>
            </div>
            <style jsx>{`
        ul.parent li {
          position: relative;
        }
        ul.parent li:hover::after {
          content: attr(data-name);
          position: absolute;
          top: 0%;
          left: 80px;
          transform: translateX(-50%);
          background-color: inherit;
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          white-space: nowrap;
        }
      `}</style>
        </>
    );
}

export default SocialMedia;
