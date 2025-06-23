import { SimpleVehicle } from '@/lib/vehicles.data';

interface VehicleDetailsProps {
  vehicle: SimpleVehicle;
  onBack: () => void;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicle, onBack }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 text-white">
      <button onClick={onBack} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mb-4">
        &larr; Back to Inquiry List
      </button>
      <h3 className="text-xl font-bold mb-4">{vehicle.name}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="font-semibold">Model:</p>
          <p>{vehicle.model}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="font-semibold">Category:</p>
          <p>{vehicle.category}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="font-semibold">Subcategory:</p>
          <p>{vehicle.subcategory}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="font-semibold">Gross Vehicle Weight:</p>
          <p>{vehicle.specifications.capacity.grossVehicleWeight} kg</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="font-semibold">Engine Power:</p>
          <p>{vehicle.specifications.engine.power} HP</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="font-semibold">Base Price:</p>
          <p>₹{vehicle.pricing.basePrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
