'use client'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub} from "react-icons/fa";


import { IconContext } from "react-icons";

const iconsMap = {
  'github': <FaGithub/>,
  'linkedin': <FaLinkedin/>,
  'email': <IoIosMail/>
}

type IconType = keyof typeof iconsMap

interface CustomIconProps {
  type: IconType,
  size?: string
}

export const CustomIcon: React.FC<CustomIconProps> = ({ type, size = '2em' }) => {
  return (
    <>
      <IconContext.Provider value={{ size: size }} >
        {iconsMap[type]}
      </IconContext.Provider>
    </>
  )
}
