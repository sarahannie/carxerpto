import { useEffect, useState } from 'react';
import { baseUrl, getRequest } from '../utils/chatUtils';

export const useFetchRecipientUser = (message, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = message?.members.find((id) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;

      const response = await getRequest(`${baseUrl}/users/getuser/${recipientId}`);

      if (response.error) {
        return setError(response);
      }

      setRecipientUser(response.responseMessage);
    };

    getUser();
  }, [recipientId]);

  return { recipientUser, error };
};
