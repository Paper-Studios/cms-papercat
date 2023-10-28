import { types } from "react-bricks/frontend"
import Header from "./Header"
import HeaderMenuItem from "./HeaderMenuItem"
import HeaderMenuSubItem from "./HeaderMenuSubItem"
import Navbar from "./Navbar"
import Footer from "./Footer"
import FooterColumn from "./FooterColumn"
import FooterLink from "./FooterLink"
import Button from "./Button"

const layout: types.Brick[] = [
  HeaderMenuItem,
  HeaderMenuSubItem,
  Navbar,
  Footer,
  FooterColumn,
  FooterLink,
  Button,
]

export default layout