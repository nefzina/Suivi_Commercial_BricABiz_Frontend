// import React, { useState, useEffect } from 'react';
// import { Plus, Trash2, Save, X } from 'lucide-react';
// import type { SaleReport } from '../types/SaleReport';
// import type { Client } from '../types/Client';
// import type { User } from '../types/User';
// import type { Zone } from '../types/Zone';
// import type { Product } from '../types/Product';
// import './CreateSalesReport.scss';



// const CreateSalesReport: React.FC = () => {
//   const [formData, setFormData] = useState<SaleReport>({
//     title: '',
//     clientId: '',
//     salesPersonId: '',
//     zoneId: '',
//     products: [{ productId: '', qty: 0 }],
//     expectedCloseDate: '',
//     status: 'lead',
//     probability: 0,
//     notes: '',
//     source: ''
//   });

//   const [clients, setClients] = useState<Client[]>([]);
//   const [salesPersons, setSalesPersons] = useState<User[]>([]);
//   const [zones, setZones] = useState<Zone[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [showAddClient, setShowAddClient] = useState<boolean>(false);
//   const [newClientName, setNewClientName] = useState<string>('');

//   useEffect(() => {
//     // Remplace par tes vrais appels API
//     const fetchData = async () => {
//       setClients([
//         { _id: '1', name: 'Client A' },
//         { _id: '2', name: 'Client B' }
//       ]);
//       setSalesPersons([
//         { _id: '1', name: 'Jean Dupont' },
//         { _id: '2', name: 'Marie Martin' }
//       ]);
//       setZones([
//         { _id: '1', name: 'Zone Nord' },
//         { _id: '2', name: 'Zone Sud' }
//       ]);
//       setProducts([
//         { _id: '1', name: 'Produit 1', price: 100 },
//         { _id: '2', name: 'Produit 2', price: 250 },
//         { _id: '3', name: 'Produit 3', price: 500 }
//       ]);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const total = formData.products.reduce((sum, item) => {
//       const product = products.find(p => p._id === item.productId);
//       return sum + (product ? product.price * item.qty : 0);
//     }, 0);
//     setTotalAmount(total);
//   }, [formData.products, products]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleProductChange = (index: number, field: keyof ProductItem, value: string | number) => {
//     const updatedProducts = [...formData.products];
//     if (field === 'qty') {
//       updatedProducts[index][field] = typeof value === 'string' ? parseInt(value) || 0 : value;
//     } else {
//       updatedProducts[index][field] = value as string;
//     }
//     setFormData(prev => ({ ...prev, products: updatedProducts }));
//   };

//   const addProduct = () => {
//     setFormData(prev => ({
//       ...prev,
//       products: [...prev.products, { productId: '', qty: 1 }]
//     }));
//   };

//   const removeProduct = (index: number) => {
//     setFormData(prev => ({
//       ...prev,
//       products: prev.products.filter((_, i) => i !== index)
//     }));
//   };

//   const handleAddClient = async () => {
//     if (newClientName.trim()) {
//       const newClient: Client = { _id: Date.now().toString(), name: newClientName };
//       setClients(prev => [...prev, newClient]);
//       setFormData(prev => ({ ...prev, clientId: newClient._id }));
//       setNewClientName('');
//       setShowAddClient(false);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const salesReport = {
//       ...formData,
//       totalAmount,
//       products: formData.products.filter(p => p.productId)
//     };

//     console.log('Sales Report à envoyer:', salesReport);
//     alert('Sales Report créé avec succès !');
//   };

//   return (
//     <div className="sales-report-container">
//       <div className="sales-report-card">
//         <h1 className="sales-report-title">Créer un Sales Report</h1>

//         <div className="sales-report-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label className="form-label">Titre *</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//               placeholder="Ex: Vente équipement industriel"
//               required
//               className="form-input"
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">Client *</label>
//             <div className="input-with-button">
//               <select
//                 name="clientId"
//                 value={formData.clientId}
//                 onChange={handleInputChange}
//                 required
//                 className="form-select"
//               >
//                 <option value="">Sélectionner un client</option>
//                 {clients.map(client => (
//                   <option key={client._id} value={client._id}>
//                     {client.name}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 type="button"
//                 onClick={() => setShowAddClient(!showAddClient)}
//                 className="btn-icon btn-success"
//               >
//                 <Plus size={20} />
//               </button>
//             </div>

//             {showAddClient && (
//               <div className="add-client-modal">
//                 <input
//                   type="text"
//                   value={newClientName}
//                   onChange={(e) => setNewClientName(e.target.value)}
//                   placeholder="Nom du nouveau client"
//                   className="form-input"
//                 />
//                 <div className="modal-actions">
//                   <button
//                     type="button"
//                     onClick={handleAddClient}
//                     className="btn btn-primary"
//                   >
//                     Ajouter
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setShowAddClient(false)}
//                     className="btn btn-secondary"
//                   >
//                     Annuler
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="form-group">
//             <label className="form-label">Commercial *</label>
//             <select
//               name="salesPersonId"
//               value={formData.salesPersonId}
//               onChange={handleInputChange}
//               required
//               className="form-select"
//             >
//               <option value="">Sélectionner un commercial</option>
//               {salesPersons.map(person => (
//                 <option key={person._id} value={person._id}>
//                   {person.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Zone *</label>
//             <select
//               name="zoneId"
//               value={formData.zoneId}
//               onChange={handleInputChange}
//               required
//               className="form-select"
//             >
//               <option value="">Sélectionner une zone</option>
//               {zones.map(zone => (
//                 <option key={zone._id} value={zone._id}>
//                   {zone.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <div className="products-header">
//               <label className="form-label">Produits *</label>
//               <button
//                 type="button"
//                 onClick={addProduct}
//                 className="btn-add-product"
//               >
//                 <Plus size={16} /> Ajouter
//               </button>
//             </div>

//             <div className="products-list">
//               {formData.products.map((product, index) => (
//                 <div key={index} className="product-item">
//                   <select
//                     value={product.productId}
//                     onChange={(e) => handleProductChange(index, 'productId', e.target.value)}
//                     required
//                     className="form-select product-select"
//                   >
//                     <option value="">Sélectionner un produit</option>
//                     {products.map(p => (
//                       <option key={p._id} value={p._id}>
//                         {p.name} - {p.price}€
//                       </option>
//                     ))}
//                   </select>
                  
//                   <input
//                     type="number"
//                     value={product.qty}
//                     onChange={(e) => handleProductChange(index, 'qty', e.target.value)}
//                     min="1"
//                     placeholder="Qté"
//                     className="form-input qty-input"
//                   />

//                   {formData.products.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => removeProduct(index)}
//                       className="btn-icon btn-danger"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="total-amount-card">
//             <span className="total-label">Montant Total</span>
//             <span className="total-value">{totalAmount.toFixed(2)} €</span>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Date de clôture prévue *</label>
//             <input
//               type="date"
//               name="expectedCloseDate"
//               value={formData.expectedCloseDate}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">Statut *</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleInputChange}
//               required
//               className="form-select"
//             >
//               <option value="lead">Lead</option>
//               <option value="qualified">Qualified</option>
//               <option value="proposal">Proposal</option>
//               <option value="won">Won</option>
//               <option value="lost">Lost</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Probabilité (%) *</label>
//             <input
//               type="number"
//               name="probability"
//               value={formData.probability}
//               onChange={handleInputChange}
//               min="0"
//               max="100"
//               placeholder="Ex: 75"
//               required
//               className="form-input"
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">Source</label>
//             <input
//               type="text"
//               name="source"
//               value={formData.source}
//               onChange={handleInputChange}
//               placeholder="Ex: Référence client, Site web, LinkedIn..."
//               className="form-input"
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">Notes</label>
//             <textarea
//               name="notes"
//               value={formData.notes}
//               onChange={handleInputChange}
//               rows={4}
//               placeholder="Ajouter des notes supplémentaires..."
//               className="form-textarea"
//             />
//           </div>

//           <div className="form-actions">
//             <button type="button" className="btn btn-secondary">
//               Annuler
//             </button>
//             <button type="submit" onClick={handleSubmit} className="btn btn-primary">
//               <Save size={20} />
//               Créer le Sales Report
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateSalesReport;