import React from 'react';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { closeVipModal } from '../../store/modalSlice';
import { useTranslation } from 'react-i18next';
import { VipPlan } from '../../types';

const vipPlans: VipPlan[] = [
  {
    id: 1,
    name: 'Silver',
    price: 9.99,
    benefits: ['10% discount on all products', 'Free shipping', 'Early access to sales'],
    period: 'month',
  },
  {
    id: 2,
    name: 'Gold',
    price: 19.99,
    benefits: ['20% discount on all products', 'Free shipping', 'Early access to sales', 'Priority customer support'],
    period: 'month',
  },
  {
    id: 3,
    name: 'Platinum',
    price: 29.99,
    benefits: [
      '30% discount on all products',
      'Free shipping',
      'Early access to sales',
      'Priority customer support',
      'Exclusive products',
    ],
    period: 'month',
  },
];

const VipModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-white border-b z-10 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{t('modals.vip.title')}</h2>
          <button
            onClick={() => dispatch(closeVipModal())}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vipPlans.map((plan) => (
              <div
                key={plan.id}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">
                  ${plan.price}
                  <span className="text-sm text-gray-500">{t('modals.vip.perMonth')}</span>
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  {t('modals.vip.choosePlan')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipModal;