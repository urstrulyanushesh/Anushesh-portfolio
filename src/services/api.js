// Services layer — can be extended for CMS or contact form API
export const sendMessage = async (payload) => {
  // placeholder for future email API integration
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 800));
};
