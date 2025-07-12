# ♻️ **ReWear**
### 🌿 *Odoo Hackathon 2025*

---

## 🧵 **Problem Statement:**
**ReWear – Community Clothing Exchange**

> Develop ReWear, a web-based platform that enables users to exchange unused clothing  
> through direct swaps or a point-based redemption system.  
> The goal is to promote sustainable fashion 🌱 and reduce textile waste by encouraging  
> users to reuse wearable garments instead of discarding them.

---

## ✨ **Overview**
ReWear connects eco-conscious communities and promotes circular fashion through:
- 📦 **Direct Swaps** between users
- 🎟 **Point-based redemptions**
- 📸 Easy item listing with photos & tags
- 🛡️ Admin moderation to keep listings clean and safe

Built as a custom **Odoo module** using:
- 💻 **QWeb templating + Tailwind CSS / Bootstrap**
- 🐘 **PostgreSQL** (via Odoo ORM)
- 🧩 **Extended res.users** model for profile & points
- 🖼 **Odoo media upload** for item images

---

## 👥 **Team Members**

| Role | Name | ✉️ Email |
|--|--|--|
| 🎨 Leader | **Aditya Prakash Singh** | prakashaditya113@gmail.com |
| 💻 Member 1 | **Manish Suthar** | manishsuthar.dev@gmail.com |
| 🗄️ Member 2 | **Dev Rajesh Gupta** | devrajsinhgharia2007@gmail.com |

---

## 🌱 **Mockup & UI Preview**
Check our interactive mockup 👉 [Excalidraw Link](https://app.excalidraw.com/l/65VNwvy7c4X/zEqG7IJrg0)

---

## 🛠 Tech Stack
| Layer      | Tech                                                           |
|:----------:|:----------------------------------------------------------------:|
| Backend   | Django 4.2+, Django REST Framework, PostgreSQL                  |
| Frontend  | React 18+, React Router, Tailwind CSS, Axios                    |
| Auth      | Django built-in User (customized with points)                   |
| Admin     | Django Admin                                                    |

---

## ⚙️ Local Setup
1. Clone repo  
2. Setup backend:
```bash
cd backend
cp .env.example .env
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
## 🚀 **Goal**
> Make sustainable fashion accessible and fun by building a trusted, user-friendly platform to swap and reuse clothes instead of letting them go to waste.

---

## ❤️‍🔥 **Special Thanks**
To **Odoo Hackathon 2025** for inspiring us to build for sustainability and circular fashion! ✨

---

