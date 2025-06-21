# 🛣️ Road Defect Tracker

An end-to-end full-stack application to collect, visualize, and analyze road defects like potholes, cracks, and uneven surfaces. Built as part of the SDE-2 assessment for RoadMetrics.

---

## 🚀 Features

- 🌍 Interactive Map (Mapbox) to mark defect locations
- 📝 Frontend form for defect submission
- 📡 Serverless backend with Flask + Zappa on AWS Lambda
- 💾 Stores defect data (type, severity, coordinates, notes)
- 🔁 Automatic marker refresh after submission

---

## 🛠 Tech Stack

| Layer        | Tech                         |
|--------------|------------------------------|
| Frontend     | HTML, CSS, JavaScript, Mapbox |
| Backend      | Python (Flask)               |
| Hosting      | AWS Lambda + API Gateway     |
| CI/CD        | GitHub + Zappa CLI           |
| Storage      | AWS RDS PostgreSQL           |

---

## 📸 Screenshots

### 📍 Defect Marker on Map
![Screenshot of map with markers](screenshots/map_with<img width="1440" alt="Screenshot 2025-06-21 at 7 10 29 PM" src="https://github.com/user-attachments/assets/20a68446-6b47-4258-af28-d013355daf76" />
_markers.png)

### 📤 Submission Form<img width="1400" alt="Screenshot 2025-06-21 at 7 11 13 PM" src="https://github.com/user-attachments/assets/7627c65e-32bd-4263-bbd1-6178956cc415" />


### ✅ Success Alert<img width="1440" alt="Screenshot 2025-06-21 at 7 10 35 PM" src="https://github.com/user-attachments/assets/29925f82-3aec-4287-8924-17705e9cbcb8" />


---

## 🧪 Local Setup

```bash
git clone https://github.com/guptaabhishek07/road-defect-tracker.git
cd road-defect-tracker
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
