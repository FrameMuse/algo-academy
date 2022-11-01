import "./ProfileView.scss"

import { Headings } from "app/areas/base"
import { FreeContentNotice } from "app/areas/user"
import Box from "app/layouts/Box/Box"
import Row from "app/layouts/Row/Row"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Icon from "app/ui/kit/Icon/Icon"
import AppNavLink from "app/ui/kit/Link/AppNavLink"
import Table from "app/ui/kit/Table/Table"
import Callout from "app/ui/synthetic/Callout/Callout"
import EditableAvatar from "app/ui/synthetic/EditableAvatar/EditableAvatar"
import ProgressBar from "app/ui/synthetic/ProgressBar/ProgressBar"
import { Route, Routes } from "react-router-dom"

enum ProfileViewRoutes {
  MyAccount = "", // local root
  MyPurcase = "purchase",
  MyProgress = "progress"
}

function ProfileView() {
  return (
    <section className="page-section account-section">
      <div className="wrapper">
        <div className="title-block">
          <h1>Account Information</h1>
        </div>
        <FreeContentNotice />
        <div className="account-big-block">
          <div className="account-left">
            <div className="account-menu">
              <AppNavLink to={ProfileViewRoutes.MyAccount} className="account-menu-link" end>My Account</AppNavLink>
              <AppNavLink to={ProfileViewRoutes.MyPurcase} className="account-menu-link">My Purchase</AppNavLink>
              <AppNavLink to={ProfileViewRoutes.MyProgress} className="account-menu-link">My Progress</AppNavLink>
            </div>
          </div>
          <div className="account-right">
            <Routes>
              <Route index element={<AccountView />} />
              <Route path={ProfileViewRoutes.MyPurcase} element={<PurchaseView />} />
              <Route path={ProfileViewRoutes.MyProgress} element={<ResetProgressView />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  )
}

function AccountView() {
  return (
    <div className="account-info">
      <Box className="general-info">
        <h5>General Information</h5>
        <div className="general-info-plan">Plan - Job Seeker</div>
        <div className="general-info__info">
          <div className="general-info-img">
            <EditableAvatar image="/static/images/user.jpg" />
          </div>
          <div className="general-info-rank">
            <Icon name="crown" />
            <p>Algo Master</p>
          </div>
        </div>

        <div className="general-info-inputs">
          <Row>
            <Field required defaultValue="John">First Name</Field>
            <Field required defaultValue="Smith">Last Name</Field>
          </Row>
          <Field type="email" name="mail" required defaultValue="random_email123@gmail.com">Current Email</Field>
          <Field required defaultValue="j.smith123">User Name</Field>
        </div>
      </Box>

      <div className="solved-problems">
        <div className="solved-problems-title">
          <h5>Solved Problems</h5>
          <Callout>50 Solved</Callout>
        </div>

        <ProgressBar value={10} />

        <div className="solved-items">
          <div className="solved-item">
            <div className="solved-item-name">Getting Started</div>
            <div className="solved-item-amount">1/4</div>
          </div>
          <div className="solved-item">
            <div className="solved-item-name">Big O Notation</div>
            <div className="solved-item-amount">3/6</div>
          </div>
          <div className="solved-item">
            <div className="solved-item-name">Data Structures</div>
            <div className="solved-item-amount">6/10</div>
          </div>
          <div className="solved-item">
            <div className="solved-item-name">Coding Patterns</div>
            <div className="solved-item-amount">18/35</div>
          </div>
          <div className="solved-item">
            <div className="solved-item-name">System Design</div>
            <div className="solved-item-amount">4/12</div>
          </div>
          <div className="solved-item">
            <div className="solved-item-name">Behavioral Interviews</div>
            <div className="solved-item-amount">2/6</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PurchaseView() {
  return (
    <Box className="purchase-history" style={{ justifyItems: "stretch" }}>
      <h5 className="purchase-history-title">Purchase History</h5>
      <div className="table-wrap">
        <Table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Purchase Date</th>
              <th>Plan</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#143567</td>
              <td>May 21, 2022</td>
              <td>Job Seeker</td>
              <td>$149.00</td>
            </tr>
            <tr>
              <td>#143566</td>
              <td>May 29, 2022</td>
              <td>Annual Pass</td>
              <td>$249.00</td>
            </tr>
            <tr>
              <td>#126786</td>
              <td>Jun 05, 2022</td>
              <td>Job Seeker</td>
              <td>$149.00</td>
            </tr>
            <tr>
              <td>#123326</td>
              <td>Jun 19, 2022</td>
              <td>Job Seeker</td>
              <td>$149.00</td>
            </tr>
            <tr>
              <td>#121123</td>
              <td>Jul 11, 2022</td>
              <td>Annual Pass</td>
              <td>$249.00</td>
            </tr>
            <tr>
              <td>#112321</td>
              <td>Aug 15, 2022</td>
              <td>Job Seeker</td>
              <td>$149.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Box>
  )
}

function ResetProgressView() {
  return (
    <Box>
      <Headings>
        <h5>Reset Your Data</h5>
        <p>You may reset your account data here; this includes course progress, submissions, and rank. Note that resetting your data is irreversible.</p>
      </Headings>
      <Button color="gray">Reset Data</Button>
    </Box>
  )
}

export default ProfileView
