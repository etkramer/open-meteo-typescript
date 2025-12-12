// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Forecast extends APIResource {
  /**
   * 7 day weather variables in hourly and daily resolution for given WGS84 latitude
   * and longitude coordinates. Available worldwide.
   */
  retrieve(query: ForecastRetrieveParams, options?: RequestOptions): APIPromise<ForecastRetrieveResponse> {
    return this._client.get('/v1/forecast', {
      query,
      defaultBaseURL: 'https://api.open-meteo.com',
      ...options,
    });
  }
}

export interface ForecastRetrieveResponse {
  /**
   * Current weather conditions with the attributes: time, temperature, wind_speed,
   * wind_direction and weather_code
   */
  current_weather?: ForecastRetrieveResponse.CurrentWeather;

  /**
   * For each selected daily weather variable, data will be returned as a floating
   * point array. Additionally a `time` array will be returned with ISO8601
   * timestamps.
   */
  daily?: ForecastRetrieveResponse.Daily;

  /**
   * For each selected daily weather variable, the unit will be listed here.
   */
  daily_units?: { [key: string]: string };

  /**
   * The elevation in meters of the selected weather grid-cell. In mountain terrain
   * it might differ from the location you would expect.
   */
  elevation?: number;

  /**
   * Generation time of the weather forecast in milli seconds. This is mainly used
   * for performance monitoring and improvements.
   */
  generationtime_ms?: number;

  /**
   * For each selected weather variable, data will be returned as a floating point
   * array. Additionally a `time` array will be returned with ISO8601 timestamps.
   */
  hourly?: ForecastRetrieveResponse.Hourly;

  /**
   * For each selected weather variable, the unit will be listed here.
   */
  hourly_units?: { [key: string]: string };

  /**
   * WGS84 of the center of the weather grid-cell which was used to generate this
   * forecast. This coordinate might be up to 5 km away.
   */
  latitude?: number;

  /**
   * WGS84 of the center of the weather grid-cell which was used to generate this
   * forecast. This coordinate might be up to 5 km away.
   */
  longitude?: number;

  /**
   * Applied timezone offset from the &timezone= parameter.
   */
  utc_offset_seconds?: number;
}

export namespace ForecastRetrieveResponse {
  /**
   * Current weather conditions with the attributes: time, temperature, wind_speed,
   * wind_direction and weather_code
   */
  export interface CurrentWeather {
    temperature: number;

    time: string;

    weather_code: number;

    wind_direction: number;

    wind_speed: number;
  }

  /**
   * For each selected daily weather variable, data will be returned as a floating
   * point array. Additionally a `time` array will be returned with ISO8601
   * timestamps.
   */
  export interface Daily {
    time: Array<string>;

    apparent_temperature_max?: Array<number>;

    apparent_temperature_min?: Array<number>;

    et0_fao_evapotranspiration?: Array<number>;

    precipitation_hours?: Array<number>;

    precipitation_sum?: Array<number>;

    shortwave_radiation_sum?: Array<number>;

    snowfall_sum?: Array<number>;

    sunrise?: Array<number>;

    sunset?: Array<number>;

    temperature_2m_max?: Array<number>;

    temperature_2m_min?: Array<number>;

    uv_index_clear_sky_max?: Array<number>;

    uv_index_max?: Array<number>;

    weather_code?: Array<number>;

    wind_direction_10m_dominant?: Array<number>;

    wind_gusts_10m_max?: Array<number>;

    wind_speed_10m_max?: Array<number>;
  }

  /**
   * For each selected weather variable, data will be returned as a floating point
   * array. Additionally a `time` array will be returned with ISO8601 timestamps.
   */
  export interface Hourly {
    time: Array<string>;

    apparent_temperature?: Array<number>;

    cloud_cover?: Array<number>;

    cloud_cover_high?: Array<number>;

    cloud_cover_low?: Array<number>;

    cloud_cover_mid?: Array<number>;

    dew_point_2m?: Array<number>;

    diffuse_radiation?: Array<number>;

    direct_normal_irradiance?: Array<number>;

    direct_radiation?: Array<number>;

    evapotranspiration?: Array<number>;

    freezing_level_height?: Array<number>;

    precipitation?: Array<number>;

    pressure_msl?: Array<number>;

    relative_humidity_2m?: Array<number>;

    shortwave_radiation?: Array<number>;

    snow_height?: Array<number>;

    soil_moisture_0_1cm?: Array<number>;

    soil_moisture_1_3cm?: Array<number>;

    soil_moisture_27_81cm?: Array<number>;

    soil_moisture_3_9cm?: Array<number>;

    soil_moisture_9_27cm?: Array<number>;

    soil_temperature_0cm?: Array<number>;

    soil_temperature_18cm?: Array<number>;

    soil_temperature_54cm?: Array<number>;

    soil_temperature_6cm?: Array<number>;

    temperature_2m?: Array<number>;

    vapour_pressure_deficit?: Array<number>;

    weather_code?: Array<number>;

    wind_direction_10m?: Array<number>;

    wind_direction_120m?: Array<number>;

    wind_direction_180m?: Array<number>;

    wind_direction_80m?: Array<number>;

    wind_gusts_10m?: Array<number>;

    wind_speed_10m?: Array<number>;

    wind_speed_120m?: Array<number>;

    wind_speed_180m?: Array<number>;

    wind_speed_80m?: Array<number>;
  }
}

export interface ForecastRetrieveParams {
  /**
   * WGS84 coordinate
   */
  latitude: number;

  /**
   * WGS84 coordinate
   */
  longitude: number;

  current_weather?: boolean;

  daily?: Array<
    | 'temperature_2m_max'
    | 'temperature_2m_min'
    | 'snowfall_sum'
    | 'apparent_temperature_max'
    | 'apparent_temperature_min'
    | 'precipitation_sum'
    | 'precipitation_hours'
    | 'weather_code'
    | 'sunrise'
    | 'sunset'
    | 'wind_speed_10m_max'
    | 'wind_gusts_10m_max'
    | 'wind_direction_10m_dominant'
    | 'shortwave_radiation_sum'
    | 'uv_index_max'
    | 'uv_index_clear_sky_max'
    | 'et0_fao_evapotranspiration'
  >;

  hourly?: Array<
    | 'temperature_2m'
    | 'relative_humidity_2m'
    | 'dew_point_2m'
    | 'apparent_temperature'
    | 'pressure_msl'
    | 'cloud_cover'
    | 'cloud_cover_low'
    | 'cloud_cover_mid'
    | 'cloud_cover_high'
    | 'wind_speed_10m'
    | 'wind_speed_80m'
    | 'wind_speed_120m'
    | 'wind_speed_180m'
    | 'wind_direction_10m'
    | 'wind_direction_80m'
    | 'wind_direction_120m'
    | 'wind_direction_180m'
    | 'wind_gusts_10m'
    | 'shortwave_radiation'
    | 'direct_radiation'
    | 'direct_normal_irradiance'
    | 'diffuse_radiation'
    | 'vapour_pressure_deficit'
    | 'evapotranspiration'
    | 'precipitation'
    | 'weather_code'
    | 'snow_height'
    | 'freezing_level_height'
    | 'soil_temperature_0cm'
    | 'soil_temperature_6cm'
    | 'soil_temperature_18cm'
    | 'soil_temperature_54cm'
    | 'soil_moisture_0_1cm'
    | 'soil_moisture_1_3cm'
    | 'soil_moisture_3_9cm'
    | 'soil_moisture_9_27cm'
    | 'soil_moisture_27_81cm'
  >;

  /**
   * If `past_days` is set, yesterdays or the day before yesterdays data are also
   * returned.
   */
  past_days?: 1 | 2;

  temperature_unit?: 'celsius' | 'fahrenheit';

  /**
   * If format `unixtime` is selected, all time values are returned in UNIX epoch
   * time in seconds. Please not that all time is then in GMT+0! For daily values
   * with unix timestamp, please apply `utc_offset_seconds` again to get the correct
   * date.
   */
  timeformat?: 'iso8601' | 'unixtime';

  /**
   * If `timezone` is set, all timestamps are returned as local-time and data is
   * returned starting at 0:00 local-time. Any time zone name from the
   * [time zone database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   * is supported.
   */
  timezone?: string;

  wind_speed_unit?: 'kmh' | 'ms' | 'mph' | 'kn';
}

export declare namespace Forecast {
  export {
    type ForecastRetrieveResponse as ForecastRetrieveResponse,
    type ForecastRetrieveParams as ForecastRetrieveParams,
  };
}
