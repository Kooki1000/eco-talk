export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      addresses: {
        Row: {
          city: string;
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          city: string;
          created_at?: string;
          id?: string;
          name: string;
        };
        Update: {
          city?: string;
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'addresses_city_fkey';
            columns: ['city'];
            isOneToOne: false;
            referencedRelation: 'cities';
            referencedColumns: ['id'];
          }
        ];
      };
      cities: {
        Row: {
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      likes: {
        Row: {
          created_at: string;
          id: string;
          post: string | null;
          reply: string | null;
          user: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          post?: string | null;
          reply?: string | null;
          user: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          post?: string | null;
          reply?: string | null;
          user?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'likes_post_fkey';
            columns: ['post'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'likes_reply_fkey';
            columns: ['reply'];
            isOneToOne: false;
            referencedRelation: 'replies';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'likes_user_fkey';
            columns: ['user'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      posts: {
        Row: {
          author: string;
          city: string;
          content: string;
          created_at: string;
          id: string;
          img_url: string | null;
          lang_code: string | null;
          like_count: number;
          variant: Database['public']['Enums']['color_variant'] | null;
        };
        Insert: {
          author: string;
          city: string;
          content: string;
          created_at?: string;
          id?: string;
          img_url?: string | null;
          lang_code?: string | null;
          like_count?: number;
          variant?: Database['public']['Enums']['color_variant'] | null;
        };
        Update: {
          author?: string;
          city?: string;
          content?: string;
          created_at?: string;
          id?: string;
          img_url?: string | null;
          lang_code?: string | null;
          like_count?: number;
          variant?: Database['public']['Enums']['color_variant'] | null;
        };
        Relationships: [
          {
            foreignKeyName: 'posts_city_id_fkey';
            columns: ['city'];
            isOneToOne: false;
            referencedRelation: 'cities';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'posts_user_id_fkey';
            columns: ['author'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      profiles: {
        Row: {
          avatar: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
        };
        Insert: {
          avatar?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
        };
        Update: {
          avatar?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      replies: {
        Row: {
          author: string;
          city: string;
          content: string;
          created_at: string;
          id: string;
          lang_code: string | null;
          like_count: number;
        };
        Insert: {
          author: string;
          city: string;
          content: string;
          created_at?: string;
          id?: string;
          lang_code?: string | null;
          like_count?: number;
        };
        Update: {
          author?: string;
          city?: string;
          content?: string;
          created_at?: string;
          id?: string;
          lang_code?: string | null;
          like_count?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'replies_author_fkey';
            columns: ['author'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'replies_city_fkey';
            columns: ['city'];
            isOneToOne: false;
            referencedRelation: 'cities';
            referencedColumns: ['id'];
          }
        ];
      };
      trash_schedule: {
        Row: {
          address: string | null;
          city: string;
          created_at: string;
          date: string | null;
          id: string;
          info: string | null;
          type: Database['public']['Enums']['trash_type'];
          week_of_month: number | null;
          weekday: Database['public']['Enums']['weekday'] | null;
        };
        Insert: {
          address?: string | null;
          city: string;
          created_at?: string;
          date?: string | null;
          id?: string;
          info?: string | null;
          type: Database['public']['Enums']['trash_type'];
          week_of_month?: number | null;
          weekday?: Database['public']['Enums']['weekday'] | null;
        };
        Update: {
          address?: string | null;
          city?: string;
          created_at?: string;
          date?: string | null;
          id?: string;
          info?: string | null;
          type?: Database['public']['Enums']['trash_type'];
          week_of_month?: number | null;
          weekday?: Database['public']['Enums']['weekday'] | null;
        };
        Relationships: [
          {
            foreignKeyName: 'trash_schedule_address_fkey';
            columns: ['address'];
            isOneToOne: false;
            referencedRelation: 'addresses';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'trash_schedule_city_id_fkey';
            columns: ['city'];
            isOneToOne: false;
            referencedRelation: 'cities';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      color_variant: 'red' | 'orange' | 'green' | 'blue' | 'purple';
      trash_type:
        | 'burnable'
        | 'nonBurnable'
        | 'bulky'
        | 'recyclable'
        | 'plastic'
        | 'other';
      weekday:
        | 'Sunday'
        | 'Monday'
        | 'Tuesday'
        | 'Wednesday'
        | 'Thursday'
        | 'Friday'
        | 'Saturday';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;
