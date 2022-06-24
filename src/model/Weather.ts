export default interface Weather {
  name: string;
  country: string;
  last_updated: string;
  temp_c: number;
  feelslike_c: number;
  condition: string;
  condition_icon: string;
  air_quality_index: number;
}
