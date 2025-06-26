import { useNavigate } from 'react-router-dom';

function NotFound() {
   const navigate = useNavigate();
  return (
   <div className="mt-32 text-center py-10 px-6">
  <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
    404
  </h2>
  <p className="text-lg mt-3 mb-2">Not Found</p>
  <button
  onClick={() => navigate('/')}
    className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white font-semibold py-2 px-6 rounded hover:brightness-110 transition"
  >
   Home
  </button>
</div>

  )
}

export default NotFound