export default interface Weather {
  name: string;
  last_updated: string;
  temp_c: number;
  feelslike_c: number;
  condition: string;
  condition_icon: string;
}
