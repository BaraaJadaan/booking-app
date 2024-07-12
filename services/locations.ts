import { useQuery } from 'react-query';
import api from './api';

interface LocationProperties {
    osm_id: number;
    country: string;
    city: string;
    name: string;
    state: string;
    type: string;
  }
  
export interface LocationFeature {
    geometry: {
      coordinates: [number, number];
      type: string;
    };
    type: string;
    properties: LocationProperties;
  }

interface FetchLocationsResponse {
    features: LocationFeature[];
  }

interface FetchLocationsParams {
    query: string;
    limit?: number;
  }

  const fetchLocations = async ({ query, limit = 20 }: FetchLocationsParams): Promise<LocationFeature[]> => {
    const response = await api.get<FetchLocationsResponse>('/api', {
      params: { q: query, limit },
    });
    return response.data.features;
  };
  
  export const useLocations = (query: string) => {
    return useQuery(
      ['locations', query],
      () => fetchLocations({ query }),
      {
        enabled: !!query,
      }
    );
  };
