import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { formatDate } from "../../utils/date";

const Dashboard = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
		logout();
	};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-300 text-transparent bg-clip-text">
          Dashboard
        </h2>
        <div className="space-y-4">
          <motion.div
            className="p-4 bg-gray-600 bg-opacity-50 rounded-lg border border-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Profile Information
            </h3>
            <p className="text-gray-300">Name: {user.name}</p>
            <p className="text-gray-300">Email: {user.email}</p>
          </motion.div>

          <motion.div
            className="p-4 bg-gray-600 bg-opacity-50 rounded-lg border border-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Account Activity
            </h3>
            <p className="text-gray-300">
              <span className="font-bold">Joined: </span>
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-300">
              <span className="font-bold">Last Login: </span>

              {formatDate(user.lastLogin)}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-300 text-white 
						font-bold rounded-lg shadow-lg hover:from-purple-500
						hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200"
          >
            Logout
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
