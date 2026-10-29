import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  NewsArticle,
  ActivityEvent,
  GalleryItem,
  OrgMember,
  MinistryProgram,
  ContactMessage,
  OrgProfile,
} from '../types';
import {
  initialNews,
  initialEvents,
  initialGallery,
  initialOrgStructure,
  initialMinistries,
  initialOrgProfile,
  initialMessages,
} from '../data/initialData';

export type PageId =
  | 'beranda'
  | 'tentang'
  | 'berita'
  | 'kegiatan'
  | 'galeri'
  | 'struktur'
  | 'pelayanan'
  | 'kontak'
  | 'admin';

interface AppContextType {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  // Auth
  isAdmin: boolean;
  loginAdmin: (user: string, pass: string) => boolean;
  logoutAdmin: () => void;
  authError: string | null;
  // Data
  profile: OrgProfile;
  updateProfile: (updated: OrgProfile) => void;
  news: NewsArticle[];
  addNews: (article: Omit<NewsArticle, 'id'>) => void;
  updateNews: (id: string, article: Partial<NewsArticle>) => void;
  deleteNews: (id: string) => void;
  selectedNews: NewsArticle | null;
  setSelectedNews: (news: NewsArticle | null) => void;
  // Events
  events: ActivityEvent[];
  addEvent: (event: Omit<ActivityEvent, 'id'>) => void;
  updateEvent: (id: string, event: Partial<ActivityEvent>) => void;
  deleteEvent: (id: string) => void;
  selectedEvent: ActivityEvent | null;
  setSelectedEvent: (event: ActivityEvent | null) => void;
  // Gallery
  gallery: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  updateGalleryItem: (id: string, item: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;
  lightboxIndex: number | null;
  setLightboxIndex: (idx: number | null) => void;
  // Structure
  orgStructure: OrgMember[];
  addOrgMember: (member: Omit<OrgMember, 'id'>) => void;
  updateOrgMember: (id: string, member: Partial<OrgMember>) => void;
  deleteOrgMember: (id: string) => void;
  // Ministries
  ministries: MinistryProgram[];
  // Messages
  messages: ContactMessage[];
  addMessage: (msg: Omit<ContactMessage, 'id' | 'date' | 'isRead'>) => boolean;
  markMessageRead: (id: string) => void;
  deleteMessage: (id: string) => void;
  // Utilities
  resetToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PROFILE: 'gkii_youth_profile_v1',
  NEWS: 'gkii_youth_news_v1',
  EVENTS: 'gkii_youth_events_v1',
  GALLERY: 'gkii_youth_gallery_v1',
  STRUCTURE: 'gkii_youth_structure_v1',
  MESSAGES: 'gkii_youth_messages_v1',
  ADMIN_SESSION: 'gkii_youth_admin_auth_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<PageId>('beranda');
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION) === 'true';
    } catch {
      return false;
    }
  });
  const [authError, setAuthError] = useState<string | null>(null);

  // Profile
  const [profile, setProfile] = useState<OrgProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? JSON.parse(saved) : initialOrgProfile;
    } catch {
      return initialOrgProfile;
    }
  });

  // News
  const [news, setNews] = useState<NewsArticle[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
      return saved ? JSON.parse(saved) : initialNews;
    } catch {
      return initialNews;
    }
  });
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);

  // Events
  const [events, setEvents] = useState<ActivityEvent[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
      return saved ? JSON.parse(saved) : initialEvents;
    } catch {
      return initialEvents;
    }
  });
  const [selectedEvent, setSelectedEvent] = useState<ActivityEvent | null>(null);

  // Gallery
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
      return saved ? JSON.parse(saved) : initialGallery;
    } catch {
      return initialGallery;
    }
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Org Structure
  const [orgStructure, setOrgStructure] = useState<OrgMember[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STRUCTURE);
      return saved ? JSON.parse(saved) : initialOrgStructure;
    } catch {
      return initialOrgStructure;
    }
  });

  // Ministries
  const [ministries] = useState<MinistryProgram[]>(initialMinistries);

  // Messages
  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      return saved ? JSON.parse(saved) : initialMessages;
    } catch {
      return initialMessages;
    }
  });

  // Persist Profile
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [profile]);

  // Persist News
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [news]);

  // Persist Events
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [events]);

  // Persist Gallery
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [gallery]);

  // Persist Structure
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.STRUCTURE, JSON.stringify(orgStructure));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [orgStructure]);

  // Persist Messages
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [messages]);

  // Handle Admin Login
  const loginAdmin = (user: string, pass: string): boolean => {
    const cleanUser = user.trim().toLowerCase();
    const cleanPass = pass.trim();
    if (
      (cleanUser === 'admin' && (cleanPass === 'pemudagkii2026' || cleanPass === 'admin123' || cleanPass === 'baliem2026')) ||
      (cleanUser === 'bph' && cleanPass === 'baliem2026')
    ) {
      setIsAdmin(true);
      setAuthError(null);
      localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, 'true');
      return true;
    } else {
      setAuthError('Kredensial salah. Gunakan username: admin dan password: pemudagkii2026');
      return false;
    }
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    if (activePage === 'admin') {
      setActivePage('beranda');
    }
  };

  // Profile actions
  const updateProfile = (updated: OrgProfile) => {
    setProfile(updated);
  };

  // News actions
  const addNews = (articleData: Omit<NewsArticle, 'id'>) => {
    const newArticle: NewsArticle = {
      ...articleData,
      id: `news-${Date.now()}`,
    };
    setNews((prev) => [newArticle, ...prev]);
  };

  const updateNews = (id: string, updatedFields: Partial<NewsArticle>) => {
    setNews((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteNews = (id: string) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
  };

  // Event actions
  const addEvent = (eventData: Omit<ActivityEvent, 'id'>) => {
    const newEvent: ActivityEvent = {
      ...eventData,
      id: `event-${Date.now()}`,
    };
    setEvents((prev) => [newEvent, ...prev]);
  };

  const updateEvent = (id: string, updatedFields: Partial<ActivityEvent>) => {
    setEvents((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((item) => item.id !== id));
  };

  // Gallery actions
  const addGalleryItem = (itemData: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...itemData,
      id: `gal-${Date.now()}`,
    };
    setGallery((prev) => [newItem, ...prev]);
  };

  const updateGalleryItem = (id: string, updatedFields: Partial<GalleryItem>) => {
    setGallery((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((item) => item.id !== id));
  };

  // Structure actions
  const addOrgMember = (memberData: Omit<OrgMember, 'id'>) => {
    const newMember: OrgMember = {
      ...memberData,
      id: `org-${Date.now()}`,
    };
    setOrgStructure((prev) => [...prev, newMember]);
  };

  const updateOrgMember = (id: string, updatedFields: Partial<OrgMember>) => {
    setOrgStructure((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteOrgMember = (id: string) => {
    setOrgStructure((prev) => prev.filter((item) => item.id !== id));
  };

  // Messages actions
  const addMessage = (msgData: Omit<ContactMessage, 'id' | 'date' | 'isRead'>): boolean => {
    const now = new Date();
    const formatted = `${now.toISOString().slice(0, 10)} ${now.toTimeString().slice(0, 5)}`;
    const newMsg: ContactMessage = {
      ...msgData,
      id: `msg-${Date.now()}`,
      date: formatted,
      isRead: false,
    };
    setMessages((prev) => [newMsg, ...prev]);
    return true;
  };

  const markMessageRead = (id: string) => {
    setMessages((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isRead: true } : item))
    );
  };

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((item) => item.id !== id));
  };

  const resetToDefaults = () => {
    setProfile(initialOrgProfile);
    setNews(initialNews);
    setEvents(initialEvents);
    setGallery(initialGallery);
    setOrgStructure(initialOrgStructure);
    setMessages(initialMessages);
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.NEWS);
    localStorage.removeItem(STORAGE_KEYS.EVENTS);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.STRUCTURE);
    localStorage.removeItem(STORAGE_KEYS.MESSAGES);
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        authError,
        profile,
        updateProfile,
        news,
        addNews,
        updateNews,
        deleteNews,
        selectedNews,
        setSelectedNews,
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        selectedEvent,
        setSelectedEvent,
        gallery,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        lightboxIndex,
        setLightboxIndex,
        orgStructure,
        addOrgMember,
        updateOrgMember,
        deleteOrgMember,
        ministries,
        messages,
        addMessage,
        markMessageRead,
        deleteMessage,
        resetToDefaults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
