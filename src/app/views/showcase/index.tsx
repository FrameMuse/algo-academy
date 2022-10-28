import { EAppRoutes } from "app/AppRoutes"
import { Headings, Review } from "app/areas/base"
import FAQSection from "app/areas/base/sections/FAQ/FAQSection"
import Box from "app/layouts/Box/Box"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Row from "app/layouts/Row/Row"
import Button from "app/ui/kit/Button/Button"
import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Details from "app/ui/kit/Details/Details"
import Icon from "app/ui/kit/Icon/Icon"
import Input from "app/ui/kit/Input/Input"
import Selector from "app/ui/kit/Selector/Selector"
import Table from "app/ui/kit/Table/Table"
import Video from "app/ui/kit/Video/Video"
import Callout from "app/ui/synthetic/Callout/Callout"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import Notice from "app/ui/synthetic/Notice/Notice"
import Person from "app/ui/synthetic/Person/Person"
import ProfileWidget from "app/ui/synthetic/ProfileWidget/ProfileWidget"
import ProgressBar from "app/ui/synthetic/ProgressBar/ProgressBar"
import Slider from "app/ui/synthetic/Slider/Slider"
import { CSSProperties, ReactNode, useEffect } from "react"
import { Modal } from "react-modal-global"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useLocalStorage } from "react-use"
import Price from "utils/transform/price"

import __MELIODAF__ from "./meliodaf+.jpg"

function BoxDark(props: { children: ReactNode, style?: CSSProperties }) {
  return (
    <Box style={{ background: "linear-gradient(black -100%, rebeccapurple 125%)", ...props.style }}>
      {props.children}
    </Box>
  )
}

function UIShowcaseView() {
  // Disallow cookies to see the notice
  const [, setCookiesAllow] = useLocalStorage("cookies-allow")
  useEffect(() => { setCookiesAllow(false) }, [])

  return (
    <div className="wrapper">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Headings>
        <h1>UI Showcase</h1>
        <p>
          You can click, hover, focus and look ^-^
          <br />
          Note that though examples may used on the website, they are just examples and can be modified.
        </p>
        <Callout>
          {"Don't be shy to request any changes in style or behavior."}
        </Callout>
      </Headings>
      <br />
      <br />
      <Box>

        <h2>Headings</h2>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>
        <h2>Icons (so far)</h2>
        <BoxDark style={{ color: "white" }}>
          <Row>
            <Icon name="gear" />
            <Icon name="arrow-right" />
            <Icon name="chevron-down" />
            <Icon name="chevron-left" />
            <Icon name="chevron-right" />
            <Icon name="minus" />
            <Icon name="plus" />
            <Icon name="cross" />
            <Icon name="exclamation-mark" />
            <Icon name="quote" />
            <Icon name="play-circle" />
          </Row>
        </BoxDark>
        <h2>Link</h2>
        <Link to="/">Home</Link>
        <h2>Button</h2>
        <h3>Colors</h3>
        <Row alignItems="center">
          <Button>Default</Button>
          <Button color="green">Green</Button>
          <Button color="white">White</Button>
          <Button color="gray">Gray</Button>
          <Button color="dark">Dark</Button>
        </Row>
        <h3>Pending</h3>
        <Button color="dark" pending>Dark</Button>
        <h2>Button Link</h2>
        <ButtonLink to={EAppRoutes.UIShowcase}>Default</ButtonLink>
        <h2>Button Icon</h2>
        <Row alignItems="center">
          <ButtonIcon name="gear" size="big" ariaLabel={""} />
          <ButtonIcon name="gear" color="gray" ariaLabel={""} />
          <ButtonIcon name="gear" size="small" color="green" ariaLabel={""} />
          <ButtonIcon name="gear" size="little" color="dark" ariaLabel={""} />
        </Row>
        <h2>Toast</h2>
        <Button onClick={() => toast.success("Your Data Has Been Reset!", { position: "bottom-center" })}>Show Toast</Button>
        <h2>Modal</h2>
        <Button onClick={() => Modal.open(() => (
          <PopupLayout>
            <Headings>
              <h3>Heading</h3>
              <p>Description</p>
            </Headings>
          </PopupLayout>
        ))}>Show Popup</Button>
        <h2>Slider</h2>
        <Slider>
          {[...Array(15)].map((_, index) => (
            <Review key={index}>
              <Headings>
                <h6>Title of the content</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc curabitur nibh blandit in. At vel dignissim neque ipsum. Proin mattis cursus rhoncus amet sed. Nunc condimentum mi ipsum id scelerisque tempus sagittis, fermentum lectus. A, in risus morbi id.
                </p>
              </Headings>
            </Review>
          ))}
        </Slider>
        <h2>Table</h2>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>FrameMuse</td>
              <td>Developer</td>
              <td>{Price.format(1000, "USD", "US")}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>FrameMuse</td>
              <td>Developer</td>
              <td>{Price.format(1000, "USD", "US")}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>FrameMuse</td>
              <td>Developer</td>
              <td>{Price.format(1000, "USD", "US")}</td>
            </tr>
          </tbody>
        </Table>
        <h2>ProgressBar</h2>
        <div style={{ width: "25em" }}><ProgressBar value={35} /></div>
        <h2>Callout</h2>
        <Callout>Plan - Job Seeker</Callout>
        <h2>Video</h2>
        <Video src={"__TESTVIDEO__"} poster="/static/images/video1.jpg" />
        <h3>1 / 1.25 Aspect ratio</h3>
        <Video src={"__TESTVIDEO__"} poster="/static/images/video1.jpg" aspectRatio="1.25" />
        <h2>Selector</h2>
        <Selector>
          <option value="Incomplete">Not completed</option>
          <option value="complete">Completed</option>
        </Selector>
        <h2>Loader</h2>

        <Box style={{ width: "10em", background: "linear-gradient(white 0%, black 125%)" }}>
          <LoaderCover />
          <LoaderCover white />
        </Box>
        <h2>User</h2>
        <h3>Person</h3>
        <Person name="FrameMuse" bio="Developer" avatar={__MELIODAF__} />
        <h3>ProfileWidget</h3>
        <BoxDark>
          <ProfileWidget />
        </BoxDark>
        <h2>Notice</h2>
        <Notice
          title="You haven’t purchased a plan yet!"
          desc="You only have access to the free content, if you’d like to fully unlock all content that Algo Academy has to offer then you’ll need to purchase our full course."
          element={<ButtonLink to={EAppRoutes.Purchase}>Buy Now</ButtonLink>}
        />
        <h2>FAQ</h2>
        <FAQSection />
        <h2>Details</h2>
        <BoxDark>
          <Details summary="Example #1" defaultExapded>
            <p>
              Input: [2, 1, 5, 1, 3, 2], k=3
              <br />
              Output: 9
              <br />
              Explanation: Subarray with maximum sum is [5, 1, 3].
            </p>
          </Details>
        </BoxDark>
        <Box style={{ background: "black" }}>
          <Details summary="Example #1">
            <p>
              Input: [2, 1, 5, 1, 3, 2], k=3
              <br />
              Output: 9
              <br />
              Explanation: Subarray with maximum sum is [5, 1, 3].
            </p>
          </Details>
        </Box>

        <h2>Modal</h2>
        <Input placeholder="Your First Name" />
        {/* <h2>Modal</h2> */}
      </Box>
    </div>
  )
}

export default UIShowcaseView
