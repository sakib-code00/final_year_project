import React, { createContext, useContext, useEffect, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({ siteTitle: '', logo: '' });
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (res.ok) setSettings({ siteTitle: data.siteTitle || '', logo: data.logo || '' });
    } catch {}
    setLoading(false);
  };

  useEffect(() => { fetchSettings(); }, []);

  return (
    <SettingsContext.Provider value={{ ...settings, loading, refresh: fetchSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
