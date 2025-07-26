import React from 'react';
// import { auth } from '../firebase';


const DashboardPage: React.FC = () => {
  // TODO: Replace with real user data
  const user = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    points: 120,
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-cream">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-eco-brown">User Dashboard</h2>
        <div className="mb-6">
          <div className="text-lg font-semibold">Profile Info</div>
          <div className="mt-2">Username: <span className="font-mono">{user.username}</span></div>
          <div>Email: <span className="font-mono">{user.email}</span></div>
        </div>
        <div className="mb-6">
          <div className="text-lg font-semibold">Points</div>
          <div className="mt-2 text-3xl font-bold text-green-700">{user.points}</div>
        </div>
        <div>
          <div className="text-lg font-semibold">Recent Activity</div>
          <div className="mt-2 text-gray-500">No recent activity yet.</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 