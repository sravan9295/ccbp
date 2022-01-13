import NotificationCardItem from "./components/NotificationCardItem";

import "./App.css";

const notificationCardsList = [
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    className: "information-card",
    text: "Information Message",
  },
  {
    id: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
    className: "success-card",
    text: "Success Message",
  },
  {
    id: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
    className: "warning-card",
    text: "Warning Message",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
    className: "error-card",
    text: "Error Message",
  },
];

function App() {
  return (
    <div className="app-container">
      <h1 className="heading">Notifications</h1>
      <ul className="notification-cards-list">
        {notificationCardsList.map((eachNotification) => (
          <NotificationCardItem
            notificationDetails={eachNotification}
            key={eachNotification.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
