import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface UserMetric {
  userId: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewUserMetric {
  userId: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Purchase {
  purchaseId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  department: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Expense {
  expense: string;
  name: string;
  amount: string;
  createdAt: Date;
}

export interface Appointment {
  appointmentId: string;
  name: string;
  specialist: string;
  reason: string;
  symptoms: string;
  approval: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface newAppointment {

  name: string;
  specialist: string;
  reason: string;
  symptoms: string;
  approval: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface newDeletedAppointment {
  appointmentId: JSON;
}

export interface DashboardMetric {
  expense: Expense[];
  purchase: Purchase[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetric", "UserMetrics", "Appointment"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetric, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMetric"],
    }),
    getUser: build.query<UserMetric[], void>({
      query: () => "/user",
      providesTags: ["UserMetrics"],
    }),
    createUser: build.mutation<UserMetric[], NewUserMetric>({
      query: (newUser) => ({
        url: "/user",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["UserMetrics"],
    }),
    getAppointment: build.query<Appointment[], void>({
      query: () => "/appointment",
      providesTags: ["Appointment"],
    }),
    createAppointment: build.mutation<Appointment, newAppointment>({
      query: (newappointment) => ({
        url: "/appointment",
        method: "POST",
        body: newappointment,
      }),
      invalidatesTags: ["Appointment"],
    }),
    deleteAppointment: build.mutation<Appointment[], string | void>({
      query: (appointmentId) => ({
        params: appointmentId ? { appointmentId } : {},
        url: `/appointment/${appointmentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Appointment"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetDashboardMetricsQuery,
  useGetAppointmentQuery,
  useCreateAppointmentMutation,
  useDeleteAppointmentMutation,
  useCreateUserMutation,
} = api;
